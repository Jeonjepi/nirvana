import React from 'react';

const BuddhaImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <img 
        src="/assets/images/buddha.png" 
        alt="Buddha" 
        className="w-24 h-24 object-contain"
      />
    </div>
  );
};

export default BuddhaImage;