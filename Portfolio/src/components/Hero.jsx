import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-6 md:px-16 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">

        {/* Image with floating effect */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/6JXbPDsM/1000046291-removebg-preview.png"
            className="w-44 md:w-72 rounded-full mt-20 shadow-xl animate-float"
            alt="Arnab Biswas"
          />
          <div className="absolute -inset-1 rounded-full opacity-20 blur-lg animate-pulse"></div>
        </div>

        {/* Text Content */}
        <div className="text-center mt-15 lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold animate-colorCycle">
            Arnab Biswas
          </h1>

          {/* Typewriter Role Animation */}
          <h2 className="mt-2 text-2xl font-medium text-gray-300 h-8">
            <span className="border-r-2 border-gray-300 pr-2 animate-type">
              MERN Stack Developer
            </span>
          </h2>

          <p className="py-4 text-base md:text-lg text-gray-400 leading-relaxed animate-fadeIn delay-300">
            Hello, I'm from Bangladesh.
            <br />
            Passionate about building full-stack web apps with modern tech.
            <br />
            Always learning, always coding.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center lg:justify-start mt-4 text-2xl text-gray-300">
            <a
              href="https://github.com/arnab44444"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-500 transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arnab-biswas04/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-600 transition-transform transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/arnabbiswas444"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-6">
            <button
              className="btn border-none bg-black px-7 rounded-full text-white animate-bounce hover:scale-105 transition"
              // onClick={() =>
              //   window.open("https://example.com/resume.pdf", "_blank")
              // }
            >
              View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes type {
            from { width: 0 }
            to { width: 100% }
          }
          .animate-type {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            animation: type 3s steps(10, end) infinite alternate;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }

          @keyframes colorCycle {
            0%   { color: #06b6d4; }   /* cyan-500 */
            20%  { color: #3b82f6; }   /* blue-500 */
            40%  { color: #8b5cf6; }   /* violet-500 */
            60%  { color: #ec4899; }   /* pink-500 */
            80%  { color: #f59e0b; }   /* amber-500 */
            100% { color: #06b6d4; }   /* back to cyan-500 */
          }
          .animate-colorCycle {
            animation: colorCycle 10s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
