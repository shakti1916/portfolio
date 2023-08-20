import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "WEATHER DETECTOR",
      description:
        "A live Geolocation app for finding weather and their geographical temperature.",
      photo: "/src/assets/projects/img1.png",
    },
    {
      title: "CHATING APP",
      description:
        "A live streaming app with live Geolocation, for streaming events and chats.",
      photo: "/src/assets/projects/img2.png",
    },
    {
      title: "ECOMMERCE WEBSITE",
      description:
        "Mobile app and web app for booking instant item & dropoff accross major cities.",
      photo: "/src/assets/projects/img3.png",
    },
  ];
  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className="text-3xl mt-5 text-primary font-semibold">Featured Project</h1>
      <p className="text-white md:w-2/3 leading-[2] my-2">
        I have worked on many projects over the courses of being a Web Developer, here are a few of my live, real-world projects.
      </p>

      {/* featured project  */}
      <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
        {
          projects.map((project, index)=>(
            <div key={index} className='flex flex-col shadow-sm md:w-[342px] bg-[#31313f] rounded p-4'>
            <a href={project.photo} className='mb-4'>
              <img src={project.photo} alt="" />
            </a>
            <h3 className='text-primary font-semibold text-lg'>
            {project.title}

            </h3>
            <p className='text-white mt-1'>
              {project.description}
            </p>
            <div className='mt-5'>
            <a href="https://www.linkedin.com/in/shakti-maddeshiya-a5677522b/">
                <button className='btn bg-primary py-2 px-4 text-white rounded-md hover:bg-white hover:text-primary transition-all duration-500'>
                    About me
                </button>
                </a>
                <a href="https://github.com/shakti1916">
                <button className='btn outline py-1.5 px-6 border-none text-white rounded ml-2.5'>
                    Projects
                </button>
                </a>
                </div>



            </div>
          ))
        }
      </div>
      
    </div>
    
  );
};

export default Projects;