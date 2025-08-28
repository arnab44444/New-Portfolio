import React, { useRef, useState, useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { Motion, spring } from "react-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [colorIndex, setColorIndex] = useState(0);

  // Color cycle for heading
  const colors = ["#00FFFF", "#FF00FF", "#FFD700", "#00FF7F", "#FF4500"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jq6jtln",
        "template_1hwj6gf",
        formRef.current,
        "nwG4mBCHFcJQKq_Xr"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <section className="relative w-full px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Heading with color animation */}
      <h2
        className="text-4xl font-bold text-center mb-10 transition-colors duration-500"
        style={{ color: colors[colorIndex] }}
      >
        Contact Me
      </h2>

      {/* Glowing Background Accents */}
      <div className="absolute top-16 left-10 w-48 h-48 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-12 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl z-0"></div>

      <ToastContainer />

      <Motion
        defaultStyle={{ opacity: 0, y: 40 }}
        style={{
          opacity: spring(1, { stiffness: 70, damping: 15 }),
          y: spring(0, { stiffness: 70, damping: 15 }),
        }}
      >
        {(style) => (
          <div
            className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14"
            style={{
              opacity: style.opacity,
              transform: `translateY(${style.y}px)`,
            }}
          >
            {/* Left Side - Contact Info */}
            <div className="bg-white/10 backdrop-blur-md border border-gray-700 shadow-xl rounded-3xl p-10 space-y-6 text-gray-300">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Let's Connect
              </h2>
              <p className="text-lg font-medium leading-relaxed">
                Whether you have questions or just want to say hi, feel free to
                contact me.
              </p>

              <div className="space-y-5 text-gray-300 font-semibold text-lg">
                <p className="flex items-center gap-4">
                  <MdEmail className="text-cyan-400 text-3xl" />
                  <a
                    href="mailto:arnabbiswas661@gmail.com"
                    className="hover:underline"
                  >
                    arnabbiswas661@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <MdPhone className="text-cyan-400 text-3xl" />
                  <a href="tel:+8801731531449" className="hover:underline">
                    +8801731531449
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <FaWhatsapp className="text-green-400 text-3xl" />
                  <a
                    href="https://wa.me/8801731531449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +8801731531449
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md border border-gray-700 shadow-xl rounded-3xl p-10 space-y-8 text-gray-300"
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Send Me a Message
              </h2>

              <div>
                <label
                  htmlFor="user_email"
                  className="block mb-2 font-semibold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="you@example.com"
                  className="input input-bordered w-full rounded-xl border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 bg-transparent text-white placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Subject"
                  className="input input-bordered w-full rounded-xl border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 bg-transparent text-white placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full rounded-xl border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 bg-transparent text-white placeholder-gray-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-cyan-800 border-none hover:bg-cyan-600 text-white font-semibold w-full rounded-xl shadow-lg transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </Motion>
    </section>
  );
};

export default Contact;
