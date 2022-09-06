import React from 'react';
import trending1 from '../../assets/trending-services/image 12.png'
import trending2 from '../../assets/trending-services/image 13.png'
import trending3 from '../../assets/trending-services/Rectangle 19 (1).png'
import trending4 from '../../assets/trending-services/Rectangle 19.png'
import trending5 from '../../assets/trending-services/Rectangle 20.png'

const TrandingServises = () => {
    return (
        <div className='p-8'>
            <div>
                <div className='mx-auto text-center'>
                    <h2 className='text-3xl text-green-700 font-semibold'>Trending Servises</h2>
                    <p>Premium Home Services</p>
                </div>
                <div className='flex justify-around flex-wrap gap-2  md:mx-4 lg:mx-36'>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14'>
                            <img src={trending4} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Air-Conditioner Service</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14'>
                            <img src={trending5} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>AC Installation</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14'>
                            <img src={trending1} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Sofa Cleaning</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14'>
                            <img src={trending2} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Home Deep Cleening Service</p>
                    </div>
                    <div className='shadow-xl  mt-20 p-2 md:w-60 w-full relative rounded-2xl text-center'>
                        <div className='-mt-14'>
                            <img src={trending4} className="mx-auto" alt="" />
                        </div>
                        <p className='absolute bottom-2 text-center w-full'>Air-Conditioner Service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrandingServises;