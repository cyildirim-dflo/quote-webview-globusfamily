
import React from 'react';
import itineraryMap from '../../assets/AR_Maps.jpg';
import { ItineraryItemStyle } from '../../types/enums';

interface ItineraryHighlight {
    icon: ItineraryItemStyle;
    title: string;
    description: string;
}


const ItineraryHighlights: React.FC = () => {

    return (
        <div className='flex flex-col items-center'>
            <img
                className='w-full md:max-w-screen-md mb-[40px] h-auto'
                src="https://images.globusfamily.com/Maps/Globus/2025/KCZX.jpg"
            />
        </div>

    );
}

export default ItineraryHighlights;