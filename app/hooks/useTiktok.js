import { TOKEN_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, SYSVAR_CLOCK_PUBKEY } from '@solana/web3.js';
import { SOLANA_HOST } from '../utils/const';
import { getProgramInstance } from '../utils/utils';
const anchor = require('@project-serum/anchor');
const utf8 = anchor.utils.bytes.utf8;
const { BN, web3 } = anchor;
const { SystemProgram } = web3;

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
};

export const useTiktok = (
  setTiktoks,
  userDetail,
  videoUrl,
  description,
  setDescription,
  setVideoUrl,
  setNewVideoShow
) => {
  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const program = getProgramInstance(connection, wallet);

  const getTiktoks = async () => {
    console.log('Videos fetching');
    const videos = await program.account.videoAccount.all();
    console.log({ videos });
    setTiktoks(videos);
  };

  const likeVideo = async (address) => {};

  const createComment = async (address, count, comment) => {};

  const newVideo = async () => {
    const randomKey = anchor.web3.Keypair.generate();

    let [video_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('video'), randomKey.toBuffer()],
      program.programId
    );

    const tx = await program.rpc.createVideo(
      description,
      videoUrl,
      userDetail.userName,
      userDetail.userProfileImageUrl,
      {
        video: video_pda,
        randomKey: randomKey,
        authority: wallet.publicKey,
        ...defaultAccounts,
      }
    );
    console.log(tx);
    setDescription('');
    setVideoUrl('');
    setNewVideoShow('');
  };

  const getComments = (address, count) => {};

  return {
    getTiktoks,
    likeVideo,
    createComment,
    newVideo,
    getComments,
  };
};
