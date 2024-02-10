import React from 'react';

function SignInModal({ setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-blue-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-[30%]">
        <div className='px-8'>
          <h1 className="pl-1 text-[50px] font-bold  "  style={{ fontFamily: 'Poppins, sans-serif' }}>Sign In</h1>
          <h1 className="pl-1 text-[20px] font-[200]  "  style={{ fontFamily: 'Poppins, sans-serif' }}>Enter your informations please </h1>
          
        </div>
       <div className='flex flex-col '>
        <h1 className='absolute z-10 px-2 left-200 translate-x-10 translate-y-7 top-100 bg-blue-100 rounded-xl' style={{ fontFamily: 'Poppins, sans-serif' }}>Username :</h1>
        <input type="text" placeholder='Enter email'  className='bg-blue-100 mt-10 px-2 mx-4 py-4 text-[20px] relative z-1 text-gray-900 outline-none border-2 border-blue-300 rounded-2xl'/>
        <h1 className='absolute z-10 px-2 left-200 translate-x-10 translate-y-32 top-100 bg-blue-100 rounded-xl ' style={{ fontFamily: 'Poppins, sans-serif' }}>Password :</h1>
        <input type="password" placeholder='Enter password'  className='bg-blue-100 mt-8 px-2 mx-4 relative z-1 py-4 text-[20px] text-gray-900 outline-none border-2 border-blue-300 rounded-2xl'/>
       <div className='flex justify-end'>
        <button onClick={closeModal} className="absolute top-48 text-gray-500 hover:text-gray-800">
          Close
        </button>
        <button onClick={closeModal} className=" text-gray-700 px-6 py-2 bg-blue-400 rounded-full mt-4 hover:text-gray-800">
          Log In
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
