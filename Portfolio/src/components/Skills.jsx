import React, { useState, useEffect } from "react";
import { Motion, spring } from "react-motion";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiDaisyui,
  SiVite,
} from "react-icons/si";

const skill = [
  { name: "C", icon: <SiC className="text-xl sm:text-2xl md:text-3xl" color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus className="text-xl sm:text-2xl md:text-3xl" color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-xl sm:text-2xl md:text-3xl" color="#F7DF1E" /> },
  { name: "HTML", icon: <SiHtml5 className="text-xl sm:text-2xl md:text-3xl" color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 className="text-xl sm:text-2xl md:text-3xl" color="#1572B6" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-xl sm:text-2xl md:text-3xl" color="#47A248" /> },
  { name: "React", icon: <SiReact className="text-xl sm:text-2xl md:text-3xl" color="#61DAFB" /> },
  { name: "Express.js", icon: <SiExpress className="text-xl sm:text-2xl md:text-3xl" color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-xl sm:text-2xl md:text-3xl" color="#339933" /> },
  { name: "Firebase", icon: <SiFirebase className="text-xl sm:text-2xl md:text-3xl" color="#FFCA28" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-xl sm:text-2xl md:text-3xl" color="#FF69B4" /> },
  { name: "Vite", icon: <SiVite className="text-xl sm:text-2xl md:text-3xl" color="#646CFF" /> },
];

const colors = ["#00FFFF", "#FF00FF", "#FFD700", "#00FF7F", "#FF4500"];

const Skills = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 20s linear infinite;
        }
        @keyframes pulseFast {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-fast {
          animation: pulseFast 7s infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 12s infinite;
        }
        @keyframes sectionBgGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <div
        className="relative w-full py-16 px-4 md:px-10 overflow-hidden flex justify-center"
        style={{
          background: `linear-gradient(-45deg, #0f172a, #1e293b, #334155, #1e293b, #0f172a)`,
          backgroundSize: "400% 400%",
          animation: "sectionBgGradient 15s ease infinite",
        }}
      >
        {/* Glowing circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-300 opacity-20 rounded-full blur-3xl animate-pulse-fast"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-6xl w-full">
          {/* Animated heading */}
          <Motion
            defaultStyle={{ r: 0, g: 255, b: 255 }}
            style={{
              r: spring(parseInt(colors[colorIndex].substring(1, 3), 16), { stiffness: 60, damping: 12 }),
              g: spring(parseInt(colors[colorIndex].substring(3, 5), 16), { stiffness: 60, damping: 12 }),
              b: spring(parseInt(colors[colorIndex].substring(5, 7), 16), { stiffness: 60, damping: 12 }),
            }}
          >
            {(interpolated) => {
              const color = `rgb(${Math.round(interpolated.r)}, ${Math.round(interpolated.g)}, ${Math.round(interpolated.b)})`;
              return (
                <h2
                  className="text-4xl font-extrabold text-center mb-12 drop-shadow-lg"
                  style={{ color }}
                >
                  Skills
                </h2>
              );
            }}
          </Motion>

          <div className="overflow-hidden rounded-3xl border-4 border-dashed border-cyan-600 shadow-xl">
            <div className="animate-marquee flex gap-6 py-8 px-6 whitespace-nowrap w-max">
              {[...skill, ...skill, ...skill].map((skill, index) => (
                <div
                  key={index}
                  className="min-w-[90px] sm:min-w-[100px] md:min-w-[120px] h-24 sm:h-28 md:h-32 bg-white/10 backdrop-blur-md border border-gray-600 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center justify-center"
                >
                  <div className="mb-2">{skill.icon}</div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
