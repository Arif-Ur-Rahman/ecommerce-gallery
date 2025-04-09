'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#581c87',  // purple-900
          color: '#faf5ff',       // purple-50
          border: '1px solid #7e22ce', // purple-700
          boxShadow: '0 4px 15px rgba(88, 28, 135, 0.2)'
        },
        duration: 3000,
        success: {
          iconTheme: {
            primary: '#a855f7', // purple-500
            secondary: '#faf5ff' // purple-50
          }
        }
      }}
    />
  );
};

export default ToasterProvider;