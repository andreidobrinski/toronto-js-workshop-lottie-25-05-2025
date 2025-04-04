import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

/**
 * This is needed so that JSX recognizes the <lottie-player> web component as valid
 */
declare module "react/jsx-runtime" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": unknown;
    }
  }
}

/**
 * Adding the hidden _lottie type to get totalFrames
 */
interface CustomReadyEvent extends EventTarget {
  _lottie?: {
    totalFrames: number;
  };
}

export default function DemoScrollComponent() {
  const lottieRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleLottieLoad(frames: number) {
      create({
        player: "#scrollableLottie",
        mode: "scroll",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, frames],
          },
        ],
      });
    }
    lottieRef.current?.addEventListener("ready", (ready) => {
      const target: CustomReadyEvent | null = ready.target;
      const totalFrames = target?._lottie?.totalFrames;
      if (totalFrames === undefined) {
        return console.error("issue getting total frames");
      }
      handleLottieLoad(totalFrames);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="flex justify-between items-center px-6 py-4">
          <Link
            to="/"
            className="text-[#00DDB3] text-lg font-bold hover:text-[#00DDB3]/80 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 pt-16 w-full">
        <div className="max-w-5xl mt-[80vh]">
          <lottie-player
            ref={lottieRef}
            id="scrollableLottie"
            src="https://assets6.lottiefiles.com/packages/lf20_ru7ffwai.json"
          ></lottie-player>
        </div>

        {/* Extra space */}
        <div className="min-h-[80vh]"></div>
      </div>
    </div>
  );
}
