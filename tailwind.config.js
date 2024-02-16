/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'scissors-gradient': 'var(--Scissors-Gradient1)',
        'paper-gradient':'var(--Paper-Gradient1)',
        'rock-gradient':'var(--Rock-Gradient1)',
        'lizard-gradient': 'var(--Lizard-Gradient)',
        'cyan': 'var(--Cyan)',
        'header-outline': 'var(--Header-Outline)',
        'Radial-Gradient': 'var(--Radial-Gradient)',
        'Radial-GradientOne': 'var(--Radial-Gradient1)',
        'Radial-GradientTwo': 'var(--Radial-Gradient2)',
        'dark-text':'var(--Dark-Text)',
        'score-text': "var(--Score-Text)",
      },
      backgroundImage: { 
        'radial-back': 'radial-gradient(at top,  var(--Radial-Gradient1), var(--Radial-Gradient2))',
        'radial-back-center': 'radial-gradient(at center,  var(--Radial-Gradient1), var(--Radial-Gradient2))',
        'paper-back': 'linear-gradient(to bottom, var(--Paper-Gradient1), var(--Paper-Gradient2))',
        'scissors-back': 'linear-gradient(to bottom, var(--Scissors-Gradient1), var(--Scissors-Gradient2))',
        'rock-back': 'linear-gradient(to bottom, var(--Rock-Gradient1), var(--Rock-Gradient2))',
        // 'paper-back': 'linear-gradient(to right, var(--Paper-Gradient1), var(--Paper-Gradient2))',
        'triangle': "url('./src/assets/bg-triangle.svg')"
      },
      fontFamily: { 
        'barlow' : "'Barlow Semi Condensed', sans-serif",
      },
      boxShadow: { 
        btns: 'inset 0px 4px 2px 2px #CCD',
        btnsHover: 'inset 4px 8px 4px 4px #CCC',
        'paperShadow': '0 0.5rem #0000004d , 0 0.5rem var(--Paper-Gradient2)',
        'scissorsShadow': '0 0.5rem #0000004d , 0 0.5rem var(--Scissors-Gradient2)',
        'rockShadow': '0 0.5rem #0000004d , 0 0.5rem var(--Rock-Gradient2)',
        winnerShadow: '0 0 0 60px rgba(44, 55, 85, 0.6), 0 0 0 120px rgba(44, 55, 85, 0.3), 0 0 0 180px rgba(44, 55, 85, 0.1)'
        ,winnerShadowSM: '0 0 0 30px rgba(44, 55, 85, 0.6), 0 0 0 60px rgba(44, 55, 85, 0.3), 0 0 0 100px rgba(44, 55, 85, 0.1)'
      }
    },
  },
  plugins: [],
}

