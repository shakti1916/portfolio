import React from "react";
import Services from "./Services"

const About = () => {
  const skills = [
    { name: "UI & UXDESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "Mobile DEVELOPMENT", image: "/src/assets/icons/android.png" },
    { name: "AUTOMATION TESTING", image: "/src/assets/icons/web-scraping.png" },
  ];
  return (
    <div id="about" className="px-7 md:px-10 sm:-mt-24">
      <h1 className="text-3xl mt-5 text-primary font-semibold">About me</h1>
      <p className="text-white md:w-2/3 leading-[2] my-2">
        Hi, my name is Shakti Maddeshiya, i am a Fullstck developer, UI
        designer, Mobile developer and Automation tester, I have skills in web
        development and advance i have core understanding of advance UI design
        principles. Here are the major skills i have,{" "}
      </p>
      {/* experince section  */}
      <div className="md:flex items-center my-7">
        <p className="text-primary text-8xl font-semibold">1+</p>
        <p className="text-white text-2xl md:ml-5">
          Currently working as a Software developer. Specialised in building
          apps, while ensuring a seamless web experience for end users.
        </p>
      </div>

      {/* skills card  */}

      <div className="flex flex-col md:flex-row">
        {skills.map((skill, index) => (
          <div key={index} className="skills md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500">

        
         <img src={skill.image} alt="" />
         <p className="text-2xl mt-3 text-white font-semibold">
         {skill.name}
          
         </p>
         </div>
        ))}
      </div>
      <Services/>
    </div>
  );
};

export default About;
