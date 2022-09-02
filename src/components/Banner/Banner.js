import React from 'react';
import banner from '../../assets/banner/banner.png'

const Banner = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-1/2'>
                    <div class="hero min-h-[736px]" style={{backgroundImage: `url(${banner})`}}>
                        <div class="hero-overlay bg-opacity-20"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-5xl font-bold text-white">Home services, on demand</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>

                </div>
            </div>
        </div>
    );
};

export default Banner;