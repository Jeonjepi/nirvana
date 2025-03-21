/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buddhist-yellow': '#FFD700',
        'buddhist-blue': '#4682B4',
        'buddhist-green': '#006400',
        'buddhist-red': '#8B0000',
      },
      fontFamily: {
        // sans: ['Noto Sans KR', 'sans-serif'],
        // 커스텀 폰트 추가
        'sam3kr': ['Sam3KRFont']       
      }
    },
  },
  corePlugins: {
    margin: true,
    padding: true,
  },
  plugins: [],
}