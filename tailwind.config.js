// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom': 'polygon(50% 15%, 61% 0%, 85% 0%, 100% 25%, 100% 62%, 50% 100%, 0 62%, 0 25%, 25% 0, 39% 0)', // Adjust this for desired shape
        
      },
      colors: {
        universe_primary: '#f78230',
        universe_secondary: '#004CAD',
        text_primari: '#f26604',
        bg_btn_primary: '#f26604',
        bg_btn_hover: '#da5c04',
        bg_btn_focus: '#c25203',
        bg_btn_light: '#fde8d9',
        text_blue: '#004cae',
        text_hover: '#00449d',
        dashboard_color: '#ee6403',
        dashboard_hover: '#d65a03',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #f26604 0%, #004cae 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
