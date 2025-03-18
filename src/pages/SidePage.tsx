import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackIcon } from '../components/Icons';
import { cn } from '../utils/cn';

const SidePage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleBack = (): void => {
    navigate('/');
  };
  
  return (
    <div className="app-container">
      <div className="w-full h-full bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white px-6 py-4 flex items-center shadow-md">
          <button 
            className={cn(
              "flex items-center bg-transparent border-none text-white",
              "text-base cursor-pointer py-2 px-4 rounded",
              // Tailwind CSS 4의 그룹화된 조건부 클래스 사용
              "transition-colors hover:(bg-white/10)"
            )}
            onClick={handleBack}
          >
            <BackIcon />
            Back to Desktop
          </button>
          <h1 className="m-0 text-2xl ml-4">Side Page</h1>
        </header>
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 shadow max-w-3xl mx-auto">
            <h2 className="mt-0 text-gray-800 text-xl mb-4">환영합니다!</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              이곳은 Side 페이지입니다. 바탕화면 아이콘을 클릭하여 이동하셨습니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              이제 뒤로가기 버튼을 눌러 바탕화면으로 돌아갈 수 있습니다.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidePage;