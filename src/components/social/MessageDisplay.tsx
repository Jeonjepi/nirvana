import React from 'react';

const MessageDisplay: React.FC = () => {
  return (
    <div className="flex flex-col text-right font-sam3kr">
      <p className="text-sm mb-6 font-semibold">불기 3nnn년... 부처님께서는 0과 1의 세계인</p>
      <p className="text-sm mb-1 font-semibold">디지털 사바세계에서도 하원하시니..</p>
      
      <div className="mt-8 mb-8">
        <p className="text-sm mb-1 font-medium">3천년이 지나도 중생의 고통과</p>
        <p className="text-sm mb-1 font-medium">행복, 그리고 계몽음을 향한 욕망정음은</p>
        <p className="text-sm mb-1 font-medium">끊이지 않았고</p>
      </div>
      
      <div className="mb-8">
        <p className="text-sm mb-1 font-medium">21세기, 해탈컴퍼니의 프로젝트와 함께</p>
        <p className="text-sm mb-1 font-medium">그 교량이 이어졌다.</p>
      </div>
      
      <div className="mb-8">
        <p className="text-sm mb-1 font-medium">디지털 사바세계에 하현하신부처님.</p>
        <p className="text-sm mb-1 font-medium">우리 중생들은 부처님을 본다면 가장</p>
        <p className="text-sm mb-1 font-medium">무엇을 먼저 하고 싶을까?</p>
      </div>
    </div>
  );
};

export default MessageDisplay;