import React from 'react';
import heroImg from "../assets/shakti.png"
const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]' id='home'>
        
        <div>
            <div className=' w-full flex flex-col md:flex-row items-center justify-between'>
            {/* text on */}
                <div className='text-white'>
                <h6 className='text-3xl mt-12'>
                    Hello, I'm
                </h6>
                <h1 className='font-semibold text-3xl md:text-5xl my-4'>
                Shakti Kumar
                </h1>
                <p className='md:w-96'>
                Fullstack developer, UI designer & Automation tester, I create seamless web experience and mobile for end-users.

                </p>
                <div className='mt-5'>
                <a href="https://www.linkedin.com/in/shakti-maddeshiya-a5677522b/">
                <button className='btn bg-primary py-2 px-4 text-white rounded-md hover:bg-white hover:text-primary transition-all duration-500' id="about me">
                    About me
                </button>
                </a>
                <a href="https://github.com/shakti1916">
                <button className='btn outline py-1.5 px-6 border-none text-white rounded ml-5'>
                  Projects
                </button>
                </a>
                <a href="https://drive.google.com/file/d/1-Y4f937vNYXXvImcbwdAReZi_O6zYTAk/view?usp=drive_link">
                <button className='btn outline py-1.5 px-6 border-none text-white rounded ml-5'>
                  Resume
                </button>
                </a>
                </div>

                </div>

                {/* image */}

                <div className='order-first md:order-last relative '>
                <img src={heroImg} alt=""  className='bg-white rounded-full border border-none' width={400} height={400} />

                </div>
            </div>
            <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block'>

            </div>
        </div>
            

        </div>
    );
};

export default Home;