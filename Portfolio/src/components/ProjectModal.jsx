import React from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-orange-500">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">Description</h4>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.libraries.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* === NEW SECTIONS === */}
          {project.challenges && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Challenges Faced
              </h4>
              <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
            </div>
          )}

          {project.improvements && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Potential Improvements & Future Plans
              </h4>
              <p className="text-gray-300 leading-relaxed">{project.improvements}</p>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-green-500 transition-all"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
            <a
              href={project.clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all"
            >
              <FaGithub />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
