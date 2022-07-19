import React from 'react';
import styles from '../styles/Home.module.css';
import MainView from './components/MainView';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home = () => {
  let { connected } = useWallet();

  console.log({ connected });

  return (
    <div className={'app'}>
      {connected ? (
        <MainView />
      ) : (
        <>
          <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
              <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2 text-center'>
                    Login to Tiktok
                  </div>
                  <div className='font-medium text-center text-gray-400 hover:text-gray-400'>
                    Manage your account, check notifications, comment on videos
                  </div>
                  <div
                    className='text-gray-700 text-center px-4 py-2 m-2 mb-40'
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <WalletMultiButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
