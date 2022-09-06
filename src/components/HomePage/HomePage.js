import React from 'react';
import Banner from '../Banner/Banner';
import NavComponent from '../NavComponent/NavComponent';
import SafeService from '../SafeService/SafeService';
import SameDayServices from '../SameDayServices/SameDayServices';
import TrandingServises from '../TrandingServises/TrandingServises';

const HomePage = () => {
    return (
        <div>
            <NavComponent></NavComponent>
            <Banner></Banner>
            <TrandingServises></TrandingServises>
            <SameDayServices></SameDayServices>
            <SafeService></SafeService>
        </div>
    );
};

export default HomePage;