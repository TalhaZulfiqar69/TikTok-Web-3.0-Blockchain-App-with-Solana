import React, { useEffect, useState } from 'react';
import Signup from './Signup';
import { useWallet } from '@solana/wallet-adapter-react';
import { SOLANA_HOST } from '../../utils/const';
import { getProgramInstance } from '../../utils/utils';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useAccount } from '../../hooks/useAccount';
import { useTiktok } from '../../hooks/useTiktok';

const anchor = require('@project-serum/anchor');
const utf8 = anchor.utils.bytes.utf8;
const { BN, web3 } = anchor;
const { SystemProgram } = web3;

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
};

const MainView = () => {
  const [isAccount, setIsAccount] = useState(false);

  const [tiktoks, setTiktoks] = useState();
  const [newVideoShow, setNewVideoShow] = useState(false);
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [userDetail, setUserDetail] = useState();

  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const program = getProgramInstance(connection, wallet);

  const { signup } = useAccount();
  const { getTiktoks, likeVideo, createComment, newVideo, getComments } =
    useTiktok(
      setTiktoks,
      userDetail,
      videoUrl,
      description,
      setDescription,
      setVideoUrl,
      setNewVideoShow
    );

  useEffect(() => {
    if (wallet.connected) {
      checkAccounts();
      getTiktoks();
    }
  }, [wallet.connected]);

  const checkAccounts = async () => {
    const [user_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('user'), wallet.publicKey.toBuffer()],
      program.programId
    );

    try {
      const userInfo = await program.account.userAccount.fetch(user_pda);
      console.log({ userInfo });
      // console.log(userInfo.userWalletAddress.toString());
      setUserDetail(userInfo);
      setIsAccount(true);
    } catch (error) {
      setIsAccount(false);
    }
  };

  return (
    <div>
      {isAccount ? (
        <div>
          {newVideoShow && <UploadModal />}
          Tiktoks will go here
        </div>
      ) : (
        <Signup signup={signup} wallet={wallet.publicKey.toBase58()} />
      )}
    </div>
  );
};

export default MainView;
