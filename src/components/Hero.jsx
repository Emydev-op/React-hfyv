import hfimg from "../assets/hfyv3.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-tl from-slate-700 to-slate-900 md:h-screen h-[50vh] w-full relative flex  items-center justify-center ">
        <img
          src={hfimg}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className=" text-center">
          <h1 className="text-white md:text-6xl text-3xl font-bold mb-3">
            Welcome
          </h1>
          <p className="text-white md:text-4xl text-3xl font-bold mb-3">To</p>
          <h1 className="text-white md:text-6xl text-3xl font-bold mb-4">
            Holy Family Youth Village
          </h1>
          <p className="text-gray-100 md:text-4xl text-3xl font-normal pt-4">
            Home to{" "}
            <span className="text-[#BF4E03] ">
              <Typewriter
                words={["PRINCE", "PRINCESS"]}
                loop={30}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
                // onLoopDone={}
                // onType={}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
