import React from 'react';

const CloudBackground: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="bg-blue-200 p-4 rounded relative overflow-hidden w-full aspect-square">
        {/* Cloud pattern background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: `${Math.random() * 30 + 20}px`,
                height: `${Math.random() * 30 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Date */}
        <div className="text-green-800 font-medium text-sm relative z-10 mb-4">
          5月14日
        </div>
        
        {/* Chinese Message Text */}
        <div className="relative z-10 text-red-800 flex flex-col items-center text-center">
          <p className="text-sm mb-1">今日我好舒服，隻开好舒服，開三角位好舒服，</p>
          <p className="text-sm mb-1">都開黑都解，我同好好清潔，</p>
          <p className="text-sm mb-1">似個剛電話又有人離，都好老但都有實過波我。OK呀？</p>
          <p className="text-sm mb-1">隻開好真係好舒服，所以我有方法帮醫我生！</p>
          <p className="text-sm mb-1">帮離无可爭，一齊打交羅～</p>
          <p className="text-sm mb-1">最近我好中意呢，好舒服～</p>
          <p className="text-sm mb-1">醫生做乜拿水來，我想我要小心保重身體啊！</p>
        </div>
      </div>
    </div>
  );
};

export default CloudBackground;