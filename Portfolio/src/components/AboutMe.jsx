const AboutMe = () => {
  return (
    <>
      <style>{`
        @keyframes headingGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes namePulse {
          0%, 100% { color: #22d3ee; }
          50% { color: #818cf8; }
        }
        @keyframes sectionBgGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <section
        className="py-14 px-4 md:px-10  flex items-center justify-center"
        style={{
          background: `linear-gradient(-45deg, #0f172a, #1e293b, #334155, #1e293b, #0f172a)`,
          backgroundSize: "400% 400%",
          animation: "sectionBgGradient 15s ease infinite",
        }}
      >
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-blue-900 text-white">
          <h2
            className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent"
            style={{
              backgroundSize: "300% 300%",
              animation: "headingGradient 8s ease infinite",
            }}
          >
            About Me
          </h2>

          {/* Friendly Introduction */}
          <p className="text-lg leading-relaxed mb-6 text-center text-gray-300">
            Hey there! 👋 I’m{" "}
            <span
              className="font-semibold"
              style={{
                animation: "namePulse 4s ease infinite",
                color: "#22d3ee",
              }}
            >
             Arnab Biswas
            </span>{" "}
            — an undergraduate CSE student, curious coder, unapologetic chai
            enthusiast ☕, and someone who occasionally negotiates peace
            treaties with stubborn bugs.
          </p>

          {/* Professional Introduction */}
          <p className="text-lg leading-relaxed text-center text-gray-300">
            I’m a{" "}
            <span className="font-semibold text-cyan-400">
              MERN Stack Developer
            </span>{" "}
            in the making — building full-stack magic with{" "}
            <span className="font-semibold text-cyan-300">
              MongoDB, Express.js, React,
            </span>{" "}
            and <span className="font-semibold text-cyan-300">Node.js</span>.
            Alongside my coursework, I’m exploring{" "}
            <span className="font-semibold text-cyan-400">
              full-stack mastery
            </span>{" "}
            and diving into{" "}
            <span className="font-semibold text-cyan-400">tech research</span>{" "}
            that blends innovation with real-world impact. For me, coding is not
            just writing code — it’s crafting solutions, telling stories, and
            turning ideas into reality.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
