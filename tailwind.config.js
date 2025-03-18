/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 아이폰 크기 브레이크포인트 추가
        'iphone': {'max': '390px'},
        'iphone-h': {'raw': '(max-height: 844px)'},
      },
      width: {
        'iphone': '390px', // 아이폰 표준 너비
      },
      height: {
        'iphone': '844px', // 아이폰 표준 높이
      },
    },
  },
  corePlugins: {
    margin: true,
    padding: true,
  },
  plugins: [],
}