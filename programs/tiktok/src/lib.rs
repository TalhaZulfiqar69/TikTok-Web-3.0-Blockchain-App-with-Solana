use anchor_lang::prelude::*;
// use anchor_lang::solana_program::entrypoint::ProgramResult;
use std::mem::size_of;
use anchor_lang::solana_program::log::{
    sol_log_compute_units
};


declare_id!("4XZcsE9CtgEDXvfhzxuUmnjAz5BLAH2vBzWAx5xXdeto");

const USER_NAME_LENGTH: usize = 100;
const USER_URL_LENGTH: usize = 255;
const VIDEO_URL_LENGTH: usize = 255;

const TEXT_LENGTH: usize = 1024;
const NUMBER_OF_ALLOW_LIKES_SPACE: usize = 5;

#[program]
pub mod tiktok {
    use super::*;

    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        image_url: String
    ) -> Result<()> {

        let user = &mut ctx.accounts.user;
        user.user_wallet_address = ctx.accounts.authority.key();
        user.user_name = name;
        user.user_profile_image_url = image_url;

        msg!("User Added");
        sol_log_compute_units();
        Ok(())
    }

    pub fn create_video(
        ctx: Context<CreateVideo>,
        description: String,
        video_url: String,
        create_name: String,
        creator_url: String
    ) -> Result<()> {

        msg!(&description);
        let video = &mut ctx.accounts.video;
        video.authority = ctx.accounts.authority.key();
        video.description = description;
        video.video_url = video_url;
        video.creator_name = create_name;
        video.creator_url = creator_url;

        video.comment_count = 0;
        video.creator_time = ctx.accounts.clock.unix_timestamp;
        video.likes = 0;

        msg!("Video created");
        sol_log_compute_units();
        Ok(())
    }

}

#[derive(Accounts)]
pub struct CreateUser<'info> {
/// CHECK: This is not dangerous because we don't read or write from this account
    #[account(
        init,
        seeds = [b"user".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<UserAccount>() + USER_NAME_LENGTH + VIDEO_URL_LENGTH + 8,
    )]
    pub user: Account<'info, UserAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    /// CHECK: This is not dangerous because we don't read or write from this account
    pub system_program: UncheckedAccount<'info>,
    pub clock: Sysvar<'info, Clock>

}


#[derive(Accounts)]
pub struct CreateVideo<'info> {
    /// CHECK: This is not dangerous because we don't read or write from this account
    #[account(
        init,
        seeds = [b"vieo".as_ref(), randomkey.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<VideoAccount>()
        + TEXT_LENGTH +
        USER_NAME_LENGTH +
        USER_URL_LENGTH +
        VIDEO_URL_LENGTH +
        8 +
        32 +
        NUMBER_OF_ALLOW_LIKES_SPACE
    )]
    pub video: Account<'info, VideoAccount>,
    /// CHECK: This is not dangerous because we don't read or write from this account
    pub randomkey: AccountInfo<'info>,

     #[account(mut)]
    pub authority: Signer<'info>,
    /// CHECK: This is not dangerous because we don't read or write from this account
    pub system_program: UncheckedAccount<'info>,
    pub clock: Sysvar<'info, Clock>

}
#[account]
pub struct UserAccount{
    pub user_name: String,
    pub user_wallet_address: Pubkey,
    pub user_profile_image_url: String,
}

#[account]
pub struct VideoAccount {
    pub authority: Pubkey,
    pub description: String,
    pub video_url: String,
    pub creator_name: String,
    pub creator_url: String,
    pub comment_count: u64,
    pub index: u64,
    pub creator_time: i64,
    pub people_who_like: Vec<Pubkey>,
    pub likes: u64,
}