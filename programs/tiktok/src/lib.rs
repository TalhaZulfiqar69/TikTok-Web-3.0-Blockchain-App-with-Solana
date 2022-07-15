use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
use std::mem::size_of;
use anchor_lang::solana_program::log::{
    sol_log_compute_units
};


declare_id!("4XZcsE9CtgEDXvfhzxuUmnjAz5BLAH2vBzWAx5xXdeto");

const USER_NAME_LENGTH: usize = 100;
const USER_URL_LENGTH: usize = 255;
const VIDEO_URL_LENGTH: usize = 255;

#[program]
pub mod tiktok {
    use super::*;

    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        image_url: String
    ) -> Result<()> {
        let user = &mut ctx.accounts.user;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateUser<'info> {

    #[account(
        init,
        // seeds = [b"user".as_ref(), authority.key().as_ref],
        seeds = [b"user".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<UserAccount>() + USER_NAME_LENGTH + VIDEO_URL_LENGTH + 8,
    )]
    pub user: Account<'info, UserAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: UncheckedAccount<'info>,
    pub clock: Sysvar<'info, Clock>

}

#[account]
pub struct UserAccount{
    pub user_name: String,
    pub user_wallet_address: Pubkey,
    pub user_profile_image_url: String,
}