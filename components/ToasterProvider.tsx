'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return <Toaster 
    position="bottom-right"
    toastOptions={{
      style: {
        background: '#333',
        color: '#fff',
      },
      duration: 3000,
    }}
  />;
};

export default ToasterProvider;