import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/de67hpfac/image/upload/v1739938521/ruslan1_y9bzov.png",
  img2: "https://res.cloudinary.com/de67hpfac/image/upload/v1739965336/ruslan1_upiljz.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"About Me"} />
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
            Welcome to my portfolio! I'm a Senior Web Developer, and I've been building web applications for over five years now. I really love creating cool stuff online. I'm especially passionate about using React and Three.js to make websites that are fast, look amazing, and really grab your attention. I've built everything from those quick, simple single-page applications, all the way to super interactive 3D web experiences that really push the boundaries. Three.js is my go-to for creating stunning visuals and letting people interact with websites in really unique ways.

          </p>
          <h3 className='mt-10'><i>Why choose me?</i></h3>
          <p >
            🔹 Deep Technical Proficiency<br/>
            🔹 Full-Stack Development Lifecycle   <br/>
            🔹 Collaborative Client Engagement<br/>
            🔹 Performance-Driven Architecture
          </p>
          <h3 className='mt-10'><b><i>How can I help you?</i></b></h3>
          <p>
            Let's start with a chat. We'll discover what you're hoping to achieve, nail down some planning so we stay on track, and talk through your goals to make sure we're aligned. Then, I'll get to work designing and developing a really solid solution – clean, easy to maintain, secure, and built for optimal performance. We'll make sure your project is completely tested to catch all the bugs and vulnerabilities, and then I'll help you with the deployment. And, I'm here for the long haul. I offer ongoing support and maintenance, so your project stays fresh and effective. Let's talk and make something amazing happen!
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href='https://drive.google.com/'
            target='_blank'
            rel='noreferrer'
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
