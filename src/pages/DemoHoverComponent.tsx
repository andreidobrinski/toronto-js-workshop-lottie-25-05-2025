import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react';

export default function DemoHoverComponent() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const onMouseEnter = () => {
    dotLottie?.setTheme("Dark");
  };

  const onMouseLeave = () => {
    dotLottie?.setTheme("");
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
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div 
          className="w-[500px] h-[500px] relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#00DDB3]/50 transition-all duration-300"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <DotLottieReact
            dotLottieRefCallback={setDotLottie}
            src="https://lottie.host/5c138756-436a-4fba-a8f6-70388ec673e2/yxyalDwL0f.lottie"
            autoplay
            loop

          />
        </div>
      </div>


    </div>
  );
}
