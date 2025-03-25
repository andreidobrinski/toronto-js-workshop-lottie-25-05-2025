import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react';

export default function NotFound() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    dotLottie?.setTheme(newTheme ? 'dark' : '');
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <button
        onClick={toggleTheme}
        className={`absolute top-5 right-5 px-5 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
          ${!isDarkTheme 
            ? 'bg-white hover:bg-gray-200 hover:shadow-lg' 
            : 'bg-[#1a1a1a] hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]'
          }`}
      >
        <span className="text-xl">{!isDarkTheme ? '☀️' : '🌙'}</span>
        <span>{!isDarkTheme ? 'Light' : 'Dark'}</span>
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center p-[5vw] text-center">
        <div className="w-[300px] h-[300px] mb-5">
          <DotLottieReact
            dotLottieRefCallback={setDotLottie}
            src="https://lottie.host/b391ce9b-4ab5-4fff-aba0-a865fbead47e/ucRmEzFBUT.lottie"
            autoplay
            loop
          />
        </div>

        <h1 className={`text-[2.5rem] font-bold m-0 transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-[#1a1a1a]'}`}>
          Page Not Found
        </h1>
        
        <p className={`text-[1.2rem] mt-2.5 transition-colors duration-300 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
          Sorry, we couldn't find what you're looking for.
        </p>

        <Link 
          to="/" 
          className={`mt-8 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg
            ${!isDarkTheme
              ? 'bg-white text-[1a1a1a] hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
              : 'bg-[#1a1a1a] text-white hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]'
            }`}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
