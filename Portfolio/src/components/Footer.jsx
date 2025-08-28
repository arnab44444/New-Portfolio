import React from "react";
import { Motion, spring } from "react-motion";

const Footer = ({
  className = "",
  bgGradientFrom = "gray-900",
  bgGradientTo = "gray-800",
  textColor = "white",
  copyrightHolder = "Arnab Biswas",
  children,
}) => {
  return (
    <footer
      className={`footer border-1 sm:footer-horizontal footer-center text-${textColor} bg-gradient-to-r from-${bgGradientFrom} to-${bgGradientTo} shadow p-6 ${className}`}
      role="contentinfo"
    >
      <Motion
        defaultStyle={{ opacity: 0, y: 20 }}
        style={{ opacity: spring(1, { stiffness: 70, damping: 15 }), y: spring(0, { stiffness: 70, damping: 15 }) }}
      >
        {({ opacity, y }) => (
          <aside
            style={{
              opacity,
              transform: `translateY(${y}px)`,
              textAlign: "center",
              userSelect: "none",
            }}
            className="text-xl"
          >
            <p>
              © {new Date().getFullYear()} - All rights reserved by {copyrightHolder}
            </p>
            {children && <div className="mt-2">{children}</div>}
          </aside>
        )}
      </Motion>
    </footer>
  );
};

export default Footer;
