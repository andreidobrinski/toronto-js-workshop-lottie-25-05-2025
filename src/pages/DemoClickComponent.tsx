import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react';

const themes = ["day", "sunset", "night", "midnight", "winter"];

export default function DemoClickComponent() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [currentTheme, setCurrentTheme] = useState(themes[1]);
  const themeIndexRef = useRef(1);

  const cycleTheme = () => {
    if (!dotLottie) return;

    themeIndexRef.current = (themeIndexRef.current + 1) % themes.length;
    const newTheme = themes[themeIndexRef.current];
    dotLottie.setTheme(newTheme);
    setCurrentTheme(newTheme);
    console.log(`Theme set to: ${newTheme}`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="flex justify-between items-center px-6 py-4">
          <Link to="/" className="text-[#00DDB3] text-lg font-bold hover:text-[#00DDB3]/80 transition-colors duration-300">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 pt-16 w-full">
        <div className="w-full" onClick={cycleTheme}>
          <DotLottieReact
            dotLottieRefCallback={setDotLottie}
            src="https://lottie.host/ea94c1e3-5cea-4846-81ff-395a2d016287/DjCvZcleUA.lottie"
            autoplay
            loop
          />
        </div>

        {/* <button
          onClick={cycleTheme}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-[#00DDB3]/20 hover:text-[#00DDB3] transition-all duration-300 flex items-center gap-2"
        >
          <span>Current Theme: {currentTheme}</span>
          <span className="text-[#00DDB3]">→</span>
        </button> */}
      </div>
    </div>
  );
}
