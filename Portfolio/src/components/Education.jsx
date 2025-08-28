import React from "react";
import { Motion, spring } from "react-motion";

const colors = [
  "#38bdf8", // cyan-400
  "#60a5fa", // blue-400
  "#818cf8", // indigo-400
  "#a78bfa", // purple-400
  "#f472b6", // pink-400
];

const Education = () => {
  const [colorIndex, setColorIndex] = React.useState(0);

  // Cycle color every 1.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden min-h-[400px]">
      {/* Glowing Background Accent */}
      <div className="absolute top-10 right-10 w-52 h-52 bg-cyan-500 opacity-30 rounded-full blur-3xl z-0"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Motion
          defaultStyle={{ colorProgress: 0 }}
          style={{ colorProgress: spring(1, { stiffness: 60, damping: 12 }) }}
          key={colorIndex} // restart animation on color change
        >
          {(style) => {
            // interpolate between current and next color based on colorProgress
            const currentColor = colors[colorIndex];
            const nextColor = colors[(colorIndex + 1) % colors.length];

            // helper to interpolate hex colors:
            function interpolateColor(color1, color2, factor) {
              const hex = (color) =>
                color
                  .substring(1)
                  .match(/.{2}/g)
                  .map((x) => parseInt(x, 16));
              const c1 = hex(color1);
              const c2 = hex(color2);
              const r = Math.round(c1[0] + factor * (c2[0] - c1[0]));
              const g = Math.round(c1[1] + factor * (c2[1] - c1[1]));
              const b = Math.round(c1[2] + factor * (c2[2] - c1[2]));
              return `rgb(${r},${g},${b})`;
            }

            const animatedColor = interpolateColor(
              currentColor,
              nextColor,
              style.colorProgress
            );

            return (
              <h2
                className="text-4xl font-bold text-center mb-10 select-none"
                style={{ color: animatedColor }}
              >
                Education
              </h2>
            );
          }}
        </Motion>

<Motion defaultStyle={{ opacity: 0, scale: 0.95 }} style={{ opacity: spring(1), scale: spring(1) }}>
  {(style) => (
    <div
      className="bg-white/10 backdrop-blur-md border border-gray-700 shadow-xl rounded-3xl p-8 md:p-12 text-center space-y-4 transition-shadow hover:shadow-2xl"
      style={{
        opacity: style.opacity,
        transform: `scale(${style.scale})`,
      }}
    >
      <h3 className="text-3xl font-semibold text-gray-300">
        International Islamic University Chittagong (IIUC)
      </h3>
      <p className="text-gray-400 text-2xl font-bold">
        Department: Computer Science & Engineering (CSE)
      </p>
      <p className="text-gray-400 font-bold text-lg">Semester : 6th</p>
      <p className="italic font-bold text-xl text-gray-400">
        Studying at International Islamic University, Chattogram
      </p>
    </div>
  )}
</Motion>
      </div>
    </section>
  );
};

export default Education;
