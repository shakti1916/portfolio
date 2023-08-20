import React from 'react';
import services from "../../public/services.js"

const Services = () => {
    return (
        <div>
        <h1 className='text-primary font-semibold text-3xl mt-14'>
            The services i offer
        </h1>
        <div className='grid md:grid-cols-3 gap-5 md:my-8 mt-5'>
            {
                services.map((service)=>(
                    <div key={service.id} className='text-white text-center p-6 items-center service-card flex flex-col justify-center'>
                    <img src={service.image} alt="" className='mb-3' />
                    <h6 className='text-2xl mb-4'>
                        {service.name}
                    </h6>
                    <p className='text-base'>
                        {service.description}
                    </p>

                    </div>
                ))
            }
        </div>
        
        </div>
    );
};

export default Services;