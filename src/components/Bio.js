import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className='bio mt-20 container mx-auto overflow-hidden'>
      <p ref={bioRef}>
      Hi! A Senior Web Developer with 5+ years of hands-on experience in building scalable, high-performance web applications. Specializing in React, Three.js, and modern JavaScript frameworks, I am passionate about delivering cutting-edge, immersive web experiences. I have worked on a wide range of projects, from simple single-page applications (SPAs) to highly interactive 3D web applications, leveraging the power of Three.js to create stunning visuals and user interactions.

      </p>
    </div>
  );
};

export default Bio;
