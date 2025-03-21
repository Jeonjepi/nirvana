import React, { useState } from 'react';
import { PageType } from '@/types';
import NavButton from '@/components/common/NavButton';
import '@/styles/retro-ie.css';

const SocialPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full h-screen retro-ie">
      {/* IE 창 헤더 */}
      <div className="retro-ie-header">
        <img src="/assets/images/test7.png" alt="IE" className="w-4 h-4 mr-2" />
        <span className="text-xs">https://web.archive.org/web/1998/https://www.google.com/ - Microsoft Internet Explorer</span>
        <div className="ml-auto flex">
          <button className="mx-0.5 px-1 text-xs retro-ie-button">_</button>
          <button className="mx-0.5 px-1 text-xs retro-ie-button">□</button>
          <button className="mx-0.5 px-1 text-xs retro-ie-button">×</button>
        </div>
      </div>
      
      {/* 메뉴바 */}
      <div className="retro-ie-menubar">
        <div className="retro-ie-menu-item text-xs">File</div>
        <div className="retro-ie-menu-item text-xs">Edit</div>
        <div className="retro-ie-menu-item text-xs">View</div>
        <div className="retro-ie-menu-item text-xs">Go</div>
        <div className="retro-ie-menu-item text-xs">Favorites</div>
        <div className="retro-ie-menu-item text-xs">Tools</div>
        <div className="retro-ie-menu-item text-xs">Help</div>
      </div>
      
      {/* 툴바 */}
      <div className="retro-ie-toolbar">
        <div className="retro-ie-toolbar-button">
          <span>←</span>
          <span className="text-xs">Back</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>→</span>
          <span className="text-xs">Forward</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>✕</span>
          <span className="text-xs">Stop</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>↻</span>
          <span className="text-xs">Refresh</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </div>
        <div className="h-full border-l border-gray-400 mx-2"></div>
        <div className="retro-ie-toolbar-button">
          <span>🔍</span>
          <span className="text-xs">Search</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>⭐</span>
          <span className="text-xs">Favorites</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>📜</span>
          <span className="text-xs">History</span>
        </div>
        <div className="retro-ie-toolbar-button">
          <span>🖨️</span>
          <span className="text-xs">Print</span>
        </div>
      </div>
      
      {/* 주소창 */}
      <div className="retro-ie-addressbar">
        <div className="text-xs mr-1">Address</div>
        <div className="retro-ie-address-input text-xs flex items-center">
          <img src="/assets/icons/page-icon.png" alt="page" className="w-3 h-3 mr-1" />
          https://web.archive.org/web/1998/https://www.google.com/
        </div>
        <div className="ml-1">
          <button className="px-1 text-xs">▼</button>
        </div>
      </div>
      
      {/* 컨텐츠 영역 */}
      <div className="retro-ie-content bg-white">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <div className="text-sm">Loading...</div>
            </div>
          </div>
        ) : (
          <div className="p-2">
            {/* 구글 로고 */}
            <div className="text-center py-8">
              <img 
                src="/assets/images/google-old-logo.png" 
                alt="Google Logo" 
                className="retro-google-logo"
              />
            </div>
            
            {/* 검색창 */}
            <div className="retro-search-box mb-4">
              <div className="font-bold mb-4">Search the web using Google!</div>
              <form onSubmit={handleSearch}>
                <input type="text" className="retro-input mb-4" />
                <div>
                  <button type="submit" className="retro-button mr-2">Google Search</button>
                  <button type="button" className="retro-button">I'm feeling lucky</button>
                </div>
              </form>
            </div>
            
            {/* 3단 구성 테이블 */}
            <table className="retro-table mb-4">
              <tbody>
                <tr>
                  <td className="w-1/3">
                    <div className="retro-section h-full">
                      <div className="text-center font-bold mb-2">Special Searches</div>
                      <div className="text-center mb-1">
                        <a href="#" className="retro-link">금강경 Search</a>
                      </div>
                      <div className="text-center">
                        <a href="#" className="retro-link">불경 Search</a>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3">
                    <div className="retro-section-blue h-full">
                      <div className="text-center mb-1">
                        <a href="#" className="retro-link">Why use Google!</a>
                      </div>
                      <div className="text-center mb-1">
                        <a href="#" className="retro-link">Press about Google!</a>
                      </div>
                      <div className="text-center mb-1">
                        <a href="#" className="retro-link">Help!</a>
                      </div>
                      <div className="text-center mb-1">
                        <a href="#" className="retro-link">Company Info</a>
                      </div>
                      <div className="text-center mb-1">
                        <a href="#" className="retro-link">디지털 사바세계</a>
                      </div>
                      <div className="text-center">
                        <a href="#" className="retro-link">불교의 길</a>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3">
                    <div className="retro-section h-full">
                      <div className="text-center font-bold mb-2">
                        Get Buddha!
                      </div>
                      <div className="text-center mb-2">
                        updates monthly:
                      </div>
                      <div className="text-center mb-2">
                        <input type="text" placeholder="your e-mail" className="retro-input w-full mb-2" />
                        <button className="retro-button">Subscribe</button>
                        <a href="#" className="retro-link ml-2">Archive</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="text-center text-xs mt-8 mb-4">
              <div className="mb-2">디지털 사바세계에 하현하신부처님, 우리 중생들은 부처님을 본다면 가장 무엇을 먼저 하고 싶을까?</div>
              <div>Copyright ©1998 Buddha Digital World Inc.</div>
            </div>
            
            {/* 실제 네비게이션을 위한 숨겨진 버튼 */}
            <div className="text-center mt-8">
              <div 
                onClick={() => {
                  const nextButton = document.getElementById('hidden-next-button');
                  if (nextButton) {
                    nextButton.click();
                  }
                }}
                className="retro-link cursor-pointer inline-block"
              >
                [NEXT PAGE]
              </div>
              <div className="hidden">
                <NavButton id="hidden-next-button" targetPage={PageType.COMMUNITY} text="NEXT" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* 하단 상태바 */}
      <div className="retro-ie-statusbar">
        <div className="retro-ie-statusbox text-xs">Done</div>
        <div className="ml-auto flex items-center">
          <div className="flex items-center">
            <img src="/assets/icons/ie-globe.png" alt="Internet" className="w-4 h-4 mr-1" />
            <span className="text-xs">Internet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;