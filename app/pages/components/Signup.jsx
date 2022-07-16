import React, { useState } from 'react';

const Signup = ({ signup, wallet }) => {
  console.debug({ signup, wallet });

  const [userName, setUserName] = useState();
  const [profile, setProfile] = useState();

  const signupClicked = () => {
    // console.log('fmhfdsg');
    // console.log({ userName, profile });
    signup(userName, profile);
  };
  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-center'>
                Signup to use Tiktok
              </div>

              <div className='text-gray-700 text-center px-4 py-2 m-2'>
                <form class='mt-8 space-y-6'>
                  <div class='rounded-md shadow-sm -space-y-px'>
                    <div class='mb-4'>
                      <label for='username' class='sr-only'>
                        Username
                      </label>
                      <input
                        id='username'
                        name='username'
                        type='text'
                        class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Username'
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label for='profile-image' class='sr-only'>
                        Profile Image
                      </label>
                      <input
                        id='profile-image'
                        name='profile_image'
                        type='text'
                        class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Profile Image'
                        onChange={(e) => setProfile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type='button'
                      class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => signupClicked()}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
