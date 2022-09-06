import React from 'react';
import bannerbg from '../../assets/banner/banner.png'
import bannerSalon from '../../assets/banner/Category_Salon.png'
import bannerElectrician from '../../assets/banner/Category_Electrician.png'
import bannerPlumber from '../../assets/banner/Category_Plumber.png'
import bannerCCTV from '../../assets/banner/Category_CCTV.png'
import bannerAC from '../../assets/banner/Category_AC.png'
import bannerPackerMover from '../../assets/banner/Category_Packer&Mover.png'
import bannerCleaning from '../../assets/banner/Category_Cleaning.png'
import bannerPainter from '../../assets/banner/Category_Painter.png'
import bannerHome from '../../assets/banner/Category_Home_Appliance (1).png'
import bannerDisinfection from '../../assets/banner/Disinfection.png'
import bannerpestControl from '../../assets/banner/Category_Pest_control.png'
import bannerCarpenter from '../../assets/banner/Category_Carpenter.png'
import banner1 from '../../assets/banner/1.png'
import banner2 from '../../assets/banner/5 (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div>
            <div className='md:flex'>
                <div className='md:w-1/2'>
                    <div class="hero min-h-[650px]" style={{backgroundImage: `url(${bannerbg})`}}>
                        <div class="hero-overlay bg-opacity-20"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 px-2 md:px-12 text-5xl font-bold text-white">Home services, on demand</h1>
                                <div className='relative text-center'>
                                    <span className='bg-white p-3 absolute ml-2 rounded-xl'><FontAwesomeIcon icon={faMagnifyingGlass} ></FontAwesomeIcon></span>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs md:max-w-md ml-8 bg-white pr-3" />
                                </div>
                                <small className='font-semibold'>Examples: Salon, Women’s hair, Men’s grooming & Many more..</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 lg:px-4 md:px-2 text-black relative'>
                    <div>
                        <h1 className='md:text-2xl lg:text-3xl text-center font-semibold my-4'>What are you looking for?</h1>
                        <div className='grid grid-cols-4 gap-4 mx-4 md:mx-12 lg:mx-20 mt-24 md:mt-0'>
                            <div className='lg:m-4 md:m-2 text-center  '>
                                <img className='mx-auto' src={bannerSalon} alt="" />
                                <h5>Salon at Home</h5>
                            </div>
                            <div className='lg:p-4 md:p-0 text-center '>
                                <img className='mx-auto' src={bannerElectrician} alt="" />
                                <h5>Electrician</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerPlumber} alt="" />
                                <h5>Plumber</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerCCTV} alt="" />
                                <h5>CCTV</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerAC} alt="" />
                                <h5>AC service</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerPackerMover} alt="" />
                                <h5>Packer & Movers</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerCleaning} alt="" />
                                <h5>Cleaning</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerPainter} alt="" />
                                <h5>House Painter</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerHome} alt="" />
                                <h5>Home Appliances</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerDisinfection} alt="" />
                                <h5>Sisinfection</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerpestControl} alt="" />
                                <h5>Pest Control</h5>
                            </div>
                            <div className='lg:p-4 md:p-2 text-center '>
                                <img className='mx-auto' src={bannerCarpenter} alt="" />
                                <h5>Carpenter</h5>
                            </div>
                        </div>
                        <div className='flex gap-3 absolute  md:bottom-0 pr-2  '>
                            <div>
                                <img src={banner1} alt="" />
                            </div>
                            <div>
                                <img src={banner2} alt="" />
                            </div>
                            <div>
                                <img src={banner1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;