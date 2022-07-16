import { clusterApiUrl, PublicKey } from '@solana/web3.js';
import tiktok from './tiktok_idl.json';

export const SOLANA_HOST = clusterApiUrl('devnet');

export const TIKTOK_PROGRAM_ID = new PublicKey(
  '4XZcsE9CtgEDXvfhzxuUmnjAz5BLAH2vBzWAx5xXdeto'
);

export const TIKTOK_IDL = tiktok;
