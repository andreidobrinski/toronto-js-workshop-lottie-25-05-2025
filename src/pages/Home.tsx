import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-[5vh] left-[5vw] w-[50vh] h-[50vh] bg-[#00DDB3]/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[5vh] right-[5vw] w-[60vh] h-[60vh] bg-[#00DDB3]/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-[5vw]">
        <div className="w-full text-center">
          <h1 className="text-[min(8vw,6rem)] font-bold text-white mb-[min(4vw,2rem)] tracking-tight">
            <span className="text-[#00DDB3]">LottieFiles</span> x TorontoJS
          </h1>
          <p className="text-[min(2.5vw,1.5rem)] text-gray-300 mb-[min(8vw,4rem)] w-[90%] mx-auto font-light">
            Lets add some motion!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[min(4vw,2rem)] w-[95%] max-w-6xl mx-auto">
            <Link 
              to="/demo-player-theme" 
              className="group bg-gray-800/50 backdrop-blur-lg p-[min(4vw,2rem)] rounded-2xl border border-gray-700 hover:border-[#00DDB3]/50 hover:bg-[#00DDB3]/5 transition-all duration-300 flex flex-col items-center justify-center aspect-[4/3]"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00DDB3] transition-colors duration-300">Player and Basic Theming</h3>
              <p className="text-gray-400 text-lg opacity-80 group-hover:opacity-100 group-hover:text-[#00DDB3]/90 leading-relaxed transition-colors duration-300">
Introducing the dotlottie player, some simple event handling to control an animation, and basic theming
              </p>
            </Link>
            
            <Link 
              to="/demo-hover" 
              className="group bg-gray-800/50 backdrop-blur-lg p-[min(4vw,2rem)] rounded-2xl border border-gray-700 hover:border-[#00DDB3]/50 hover:bg-[#00DDB3]/5 transition-all duration-300 flex flex-col items-center justify-center aspect-[4/3]"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00DDB3] transition-colors duration-300">Hover Demo</h3>
              <p className="text-gray-400 text-lg opacity-80 group-hover:opacity-100 group-hover:text-[#00DDB3]/90 leading-relaxed transition-colors duration-300">
                Switching themes on hover of an animation (or any target component!)
              </p>
            </Link>
            
            <Link 
              to="/demo-click" 
              className="group bg-gray-800/50 backdrop-blur-lg p-[min(4vw,2rem)] rounded-2xl border border-gray-700 hover:border-[#00DDB3]/50 hover:bg-[#00DDB3]/5 transition-all duration-300 flex flex-col items-center justify-center aspect-[4/3]"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00DDB3] transition-colors duration-300">Click Demo</h3>
              <p className="text-gray-400 text-lg opacity-80 group-hover:opacity-100 group-hover:text-[#00DDB3]/90 leading-relaxed transition-colors duration-300">
                Switching themes on click of an animation (or any target component!)
              </p>
            </Link>
            
            <Link 
              to="/demo-404" 
              className="group bg-gray-800/50 backdrop-blur-lg p-[min(4vw,2rem)] rounded-2xl border border-gray-700 hover:border-[#00DDB3]/50 hover:bg-[#00DDB3]/5 transition-all duration-300 flex flex-col items-center justify-center aspect-[4/3]"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00DDB3] transition-colors duration-300">In production: 404</h3>
              <p className="text-gray-400 text-lg opacity-80 group-hover:opacity-100 group-hover:text-[#00DDB3]/90 leading-relaxed transition-colors duration-300">
                Because product owners need to be convinced
              </p>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
