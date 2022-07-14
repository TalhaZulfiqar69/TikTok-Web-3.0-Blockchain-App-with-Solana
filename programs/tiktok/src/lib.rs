use anchor_lang::prelude::*;

declare_id!("4XZcsE9CtgEDXvfhzxuUmnjAz5BLAH2vBzWAx5xXdeto");

#[program]
pub mod tiktok {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
