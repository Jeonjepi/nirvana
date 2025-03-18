// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// interface DolphinIconProps {
//   className?: string;
// }

// const DolphinIcon: React.FC<DolphinIconProps> = ({ className }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/side');
//   };

//   return (
//     <div className="desktop-icon" onClick={handleClick}>
//       <div className="icon-container">
//         <div className="icon-image">
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 512 512" 
//             fill="#42a5f5"
//             className={className}
//           >
//             <path d="M127.9 465.8c-56.2-7.8-99.6-49.9-112-105.5-2.1-9.5-2.8-16.8-2.8-30.8v-17.5h3.9c7.7 0 18.9-4.7 25.5-10.7 8.2-7.4 16-21.3 19-33.9l1.1-4.6-7.2-6.5c-22.9-20.7-39.2-48.1-46.5-78.1-3.7-15.3-4.7-39.4-2.4-55.2 9.7-66.1 60.2-117.6 125.7-128.2 14.2-2.3 37.7-2.3 51.8 0 44.6 7.4 84.6 36.2 105.4 76 20.4 39 21.7 88.2 3.3 128.4-9.1 19.8-18.9 33.7-35.4 49.9l-15 14.8 1.5 4.3c3 8.6 9.3 18.8 16.7 27 7.5 8.4 21 17.4 29.5 19.8 3.7 1 4.8 1 114.9 1h111.1v6.8c0 3.7-.3 12.8-.7 20.2-3.6 67.5-58.1 123.3-125.6 128.3-11.9.9-246.6.6-260.8-.4zm256.1-21.2c44.4-7.1 79.6-37.9 93.6-81.7 4.1-12.9 6.4-30.9 5.8-45.3l-.3-7.6H372.4l-1.7 2.3c-4.1 5.3-15.1 14.5-22.5 18.7-19.3 11-40.9 14.9-63 11.5-11.2-1.7-28.5-7.8-37.9-13.4-9.7-5.7-24.2-19.1-31.4-28.9l-6.2-8.5-14.9 1.3c-54.8 4.8-100.3 42.6-115.6 96.1-3.2 11.2-5.2 26.1-5.2 38.5v5.5l152.3-.3c83.7-.1 154.4-.6 156.7-1.2zm-41.4-209.4c3-1.6 7.1-5.3 9.2-8.5 3.5-5.1 3.6-5.5 3.6-14.5 0-10.4-1.7-14.4-8.7-20.3-8.9-7.6-20.4-7.6-29.3 0-7 5.9-8.7 9.9-8.7 20.3 0 9 .1 9.4 3.6 14.5 6.3 9.4 19.7 13.1 30.3 8.5zm-105.4-21c2.8-1.3 5.7-3.1 6.3-4 1.8-2.9 1.3-7.3-1.1-9.8-1.3-1.3-4.7-2.9-7.5-3.5-11.7-2.7-22.5 7.9-16.4 16 4.1 5.4 11.2 5.9 18.7 1.3z"/>
//           </svg>
//         </div>
//         <div className="icon-text">
//           절대 바이러스<br />
//           아닙니다.<br />
//           믿어 주세요...<br />
//           전 돌고래입니다
//         </div>
//       </div>
//       <style jsx>{`
//         .desktop-icon {
//           position: relative;
//           cursor: pointer;
//           width: 100px;
//           margin: 20px;
//         }
        
//         .icon-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 10px;
//           border-radius: 6px;
//           transition: background-color 0.2s ease;
//         }
        
//         .desktop-icon:hover .icon-container {
//           background-color: rgba(255, 255, 255, 0.1);
//         }
        
//         .desktop-icon:active .icon-container {
//           background-color: rgba(255, 255, 255, 0.2);
//         }
        
//         .icon-image {
//           width: 60px;
//           height: 60px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: #0066cc;
//           border-radius: 4px;
//           padding: 8px;
//           margin-bottom: 8px;
//         }
        
//         .icon-text {
//           color: white;
//           font-size: 12px;
//           text-align: center;
//           text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
//           background-color: #0066cc;
//           padding: 5px 10px;
//           border-radius: 4px;
//           white-space: nowrap;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DolphinIcon;