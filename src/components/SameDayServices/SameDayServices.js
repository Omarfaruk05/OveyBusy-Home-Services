import React from 'react';
import sameDay1 from '../../assets/same-day-services/kisspng-dick-rosher-plumbing-inc-plumber-drain-leak-plumber-5abfda3c8ab124 1.png'
import sameDay2 from '../../assets/same-day-services/Carpenter-PNG-Image.png'
import sameDay3 from '../../assets/same-day-services/kisspng-insecticide-pesticide-herbicide-sprayer-5d0e1b4badf171.png'
import sameDay4 from '../../assets/same-day-services/kisspng-technician-plumber-electrician-home-repair-mainten-5ae1b847d030b7 1.png'
import sameDay5 from '../../assets/same-day-services/pngegg (1).png'

const SameDayServices = () => {
    return (
        <div className='p-8 text-black'>
            <div>
                <div className='mx-auto text-center'>
                    <h2 className='text-3xl text-green-700 font-semibold'>Same Day Servises</h2>
                    <p>Premium Home Services</p>
                </div>
                <div className='flex justify-around flex-wrap gap-2  md:mx-4 lg:mx-36 font-semibold'>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center bg-orange-400 text-white'>
                        <div className='-mt-14 mb-16 text-center'>
                            <img src={sameDay1} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Plumbing Services</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14 mb-16 text-center'>
                            <img src={sameDay4} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Electrical Services</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-16 mb-16 text-center'>
                            <img src={sameDay5} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Painting Services</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className=' -mt-24 mb-16 text-center'>
                            <img src={sameDay3} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Pest Control Services</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14 mb-16 text-center'>
                            <img src={sameDay2} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Carpentery Service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SameDayServices;