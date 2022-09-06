import React from 'react';
import Photo from '../../assets/delivery-man-red-uniform-medical-mask-gloves-pointing-fingers-away-looking-confident 1.png'

const SafeService = () => {
    return (
        <div className='p-8'>
            <div className='md:flex justify-between mx-2 md:mx-12 lg:mx-96 items-center bg-[#ECECEE] rounded-xl'>
                <div className='p-6'>
                    <h2 className='text-3xl text-green-800 font-semibold'>100% Safe Service</h2>
                    <div className='flex gap-8 md:gap-12 pl-4 md:px-6 mt-2 text-black text-lg'>
                        <div>
                            <ul className='list-disc md:leading-9'>
                                <li>Masks</li>
                                <li>Gloves</li>
                            </ul>
                        </div>
                        <div>
                        <ul className='list-disc md:leading-9'>
                            <li>Temperature Checker</li>
                            <li>Sanitised Tools</li>
                        </ul>
                        </div>

                    </div>
                </div>
                <div className='w-full md:w-80'>
                    <img src={Photo} className="rounded-xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SafeService;