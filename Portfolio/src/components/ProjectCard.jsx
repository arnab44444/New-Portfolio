import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCheckCircle } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  features,
  libraries,
  images,
  liveLink,
  clientLink,
  onDetailsClick, // new prop to handle Details button click
}) => {
  return (
    <div className="bg-black text-white rounded-xl shadow-xl p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Slider */}
        <div>
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={3000}
          >
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="rounded-lg h-84 w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Project Content */}
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
            <p className="text-sm mt-2">{description}</p>

            {/* Features List */}
            <ul className="mt-3 space-y-2">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors"
                >
                  <FaCheckCircle className="text-orange-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Libraries/Technologies */}
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {libraries.map((lib, i) => (
                <div
                  key={i}
                  className="px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {lib}
                </div>
              ))}
            </div> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            {/* <a href={liveLink} target="_blank" rel="noreferrer">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                Live
              </button>
            </a>

            <a href={clientLink} target="_blank" rel="noreferrer">
              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-300">
                Github Client
              </button>
            </a> */}

            {/* Details button triggers the modal */}
            <button
              onClick={onDetailsClick}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
