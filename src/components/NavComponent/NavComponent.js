import { faCartShopping, faChevronDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../../assets/logo.png';
import playstoreIcon from '../../assets/playstore 1.png';

const NavComponent = () => {
    return (
        <div className=' bg-[#F6F6F6] text-[#415859]'>
            <div className='flex justify-between items-center mx-8 py-2'>
                <div className='flex justify-between items-center'>
                    <img src={Logo} alt="logo" className='pr-8 mb-2' />
                    <p className='text-[#415859]'> 
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                    </p>
                    
                </div>
                <div>
                    <ul className='flex items-center gap-4'>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>My Account
                        <FontAwesomeIcon className='ml-2' icon={faChevronDown} />
                        </li>
                        <li><FontAwesomeIcon className='mx-4' icon={faCartShopping} /></li>
                        <li className='flex gap-3 items-center border p-1  rounded-md border-[#415859]'><span><img src={playstoreIcon} alt="" /></span><button className=''>Download App</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;