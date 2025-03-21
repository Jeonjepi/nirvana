import React from 'react';
import clsx from 'clsx';
import { IconButtonProps } from '@/types';

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  children,
  onClick,
  className,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600',
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default IconButton;