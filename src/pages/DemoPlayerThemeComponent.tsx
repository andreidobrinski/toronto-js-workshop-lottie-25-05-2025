import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DotLottieReact, DotLottie } from '@lottiefiles/dotlottie-react';

interface Theme {
  id: string;
}

export default function DemoPlayerThemeComponent() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [status, setStatus] = useState("idle");
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loop, setLoop] = useState(false);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [selectedTheme, setSelectedTheme] = useState("");

  // Calculating total frames and progress
  const totalFrames = dotLottie?.isLoaded ? dotLottie.totalFrames : 0;
  const progress = dotLottie?.isLoaded ? (currentFrame / totalFrames) * 100 : 0;

  // 1. Effect for handling dotLottie events
  useEffect(() => {
    if (!dotLottie) return;

    // 2. Event handlers
    const onFrameChange = (event: { currentFrame: number }) => setCurrentFrame(event.currentFrame);
    const onPlay = () => setStatus("playing");
    const onPause = () => setStatus("paused");
    const onStop = () => setStatus("stopped");
    const onComplete = () => setStatus("completed");
    const onLoad = () => {
      const loadedThemes = dotLottie.manifest?.themes || [];
      setThemes(loadedThemes);
    };

    // 3.Register event listeners
    dotLottie.addEventListener("frame", onFrameChange);
    dotLottie.addEventListener("play", onPlay);
    dotLottie.addEventListener("pause", onPause);
    dotLottie.addEventListener("stop", onStop);
    dotLottie.addEventListener("complete", onComplete);
    dotLottie.addEventListener("load", onLoad);

    // Cleanup
    return () => {
      dotLottie.removeEventListener("frame", onFrameChange);
      dotLottie.removeEventListener("play", onPlay);
      dotLottie.removeEventListener("pause", onPause);
      dotLottie.removeEventListener("stop", onStop);
      dotLottie.removeEventListener("complete", onComplete);
      dotLottie.removeEventListener("load", onLoad);
    };
  }, [dotLottie]);

  // 6. Effect for handling theme changes
  // useEffect(() => {
  //   if (!dotLottie) return;

  //   if (selectedTheme) {
  //     dotLottie.setTheme(selectedTheme);
  //   } else {
  //     dotLottie.resetTheme();
  //   }
  // }, [selectedTheme, dotLottie]);

  // 4. Play or pause animation
  const playOrPause = () => {
    if (dotLottie) {
      if (status === "playing") {
        dotLottie.pause();
      } else {
        dotLottie.play();
      }
    }
  };

  // 5. Toggle loop state
  const toggleLoop = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoop(event.target.checked);
  };

  // 6. Seek functionality
  const onSeek = (event: { target: { value: number; }; }) => {
    const newFrame = (event.target.value / 100) * totalFrames;
    dotLottie?.setFrame(newFrame);
  };

  const onSeekStart = () => status === "playing" && dotLottie?.pause();
  const onSeekEnd = () => status !== "playing" && dotLottie?.play();

  return (
    <div className="">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="flex justify-between items-center px-6 py-4">
          <Link to="/" className="text-[#00DDB3] text-lg font-bold hover:text-[#00DDB3]/80 transition-colors duration-300">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className=" min-h-screen flex flex-col items-center justify-center px-4 pt-16 w-full 0">
        <div className="w-full max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 p-6 hover:border-[#00DDB3]/50 transition-all duration-300">
            <DotLottieReact
              dotLottieRefCallback={setDotLottie}
              src="https://lottie.host/5f1bd024-e8e3-4b53-8c6b-33882fd6f4cd/8EakARQwUZ.lottie"
              autoplay
              loop={loop}
              className="w-full"
            />

            {/* Controls */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <button 
                  onClick={playOrPause}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-[#00DDB3]/20 hover:text-[#00DDB3] transition-all duration-300"
                >
                  {status === "playing" ? "Pause" : "Play"}
                </button>

                <div className="flex items-center gap-4">
                  {/* 7. Theme selector */}
                  {/* <label className="flex items-center space-x-2 text-gray-300">
                    <span>Theme:</span>
                    <select 
                      value={selectedTheme}
                      onChange={(e) => setSelectedTheme(e.target.value)}
                      className="bg-gray-700 text-white px-3 py-1 rounded-lg border border-gray-600 focus:border-[#00DDB3] outline-none"
                    >
                      <option value="">None</option>
                      {themes.map((theme) => (
                        <option key={theme.id} value={theme.id}>
                          {theme.id}
                        </option>
                      ))}
                    </select>
                  </label> */}

                  <label className="flex items-center space-x-2 text-gray-300">
                    <input
                      type="checkbox"
                      checked={loop}
                      onChange={toggleLoop}
                      className="form-checkbox h-4 w-4 text-[#00DDB3] rounded border-gray-600 focus:ring-[#00DDB3]"
                    />
                    <span>Loop</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.01"
                  value={progress}
                  onChange={onSeek}
                  onMouseDown={onSeekStart}
                  onMouseUp={onSeekEnd}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00DDB3]"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Frame: {Math.round(currentFrame)}</span>
                  <span>Total: {totalFrames}</span>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
