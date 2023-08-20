import React, { useState } from 'react';
import facebook from '../assets/socials/facebook.png';
import instagram from '../assets/socials/instagram.png';
import dribbble from '../assets/socials/dribbble.png';
import email from '../assets/socials/sms.png';

const Contact = () => {
  


  const handleSubmit = async (e) => {
    
    
    e.preventDefault();

    
  
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value
    };
    if (formData.name && formData.email) {
      // Submit the form or handle data as needed
      setShowRequiredMessage(false);
    } else {
      setShowRequiredMessage(true);
    }
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      console.log(data); // You can handle the response as needed
      if (response.status === 200) {
        setSuccessMessage('Message sent successfully!');
      } else {
        setSuccessMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className='px-7 md:px-10 my-12' id='contact'>
    <div className='flex flex-col md:flex-row'>

      <div className='md:w-1/2'>
      <h1 className="text-3xl mt-5 text-primary font-semibold">Connect with me</h1>
      <p className="text-white md:w-2/3 leading-[2] my-2">
       Satsified with me? Please contact me
      </p>

      {/* social icon  */}
      <div className='flex'>
        <a href="">
        <img className='' src={facebook} alt="" />

        </a>
        <a href="https://www.instagram.com/_shakti_001/">
        <img className='ml-4' src={instagram} alt="" />

        </a>
        <a href="">
        <img className='ml-4' src={dribbble} alt="" />

        </a>
        <a href="mailto:shaktimaddeshiya34321@gmail.com" target='_blank'   rel="noreferrer">
        <img className='ml-4' src={email} alt="" />

        </a>
      </div>

      </div>

      <div className='md:w-1/2'>
      <p className='mt-10 text-white text-2xl mb-6'>
        Contact me, let`s make  magic  together
      </p>
      <form >
                <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded text-white"/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3 text-white"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2 text-white" placeholder="Message:"></textarea>
                <button  className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block" onClick={handleSubmit}>
                  Send
                </button>
              
                
            </form>

      </div>
    </div>
  
    </div>
  );
};

export default Contact;