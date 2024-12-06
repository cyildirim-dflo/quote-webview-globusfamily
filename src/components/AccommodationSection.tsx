import React from 'react';
import { LocationOn } from '@mui/icons-material';
import Title from './TitleComponent';

interface Props {
    section: AccommodationSection
}

const AccomodationSection: React.FC<Props> = ({ section }) => {

    const cities = section.accommodations.map((accommodation: Property) => accommodation.city);
    const uniqueCities = Array.from(new Set(cities));
    const [selectedCity, setSelectedCity] = React.useState(uniqueCities[0]);

    return (
        <div className='w-full min-h-96 py-[80px] max-w-screen-xl mx-auto'>
            {section.title && (<Title preTitle={section.subtitle} title={section.title} classNameForArrow='bg-accent' />)}
            <div className='flex flex-row gap-[20px] items-center w-full mb-3'>
                {uniqueCities.map((city, index) => (
                    <button key={index} onClick={() => setSelectedCity(city)} className={`bg-accent uppercase py-4 md:py-6 px-4 md:px-10 text-base md:text-lg font-sans bg0 ${selectedCity === city ? 'bg-primary text-white ' : ' '}`}>{city}</button>
                ))}
            </div>
            <div className='flex flex-col gap-[40px] overflow-hidden '>
                {section.accommodations.filter((accommodation: Property) => accommodation.city === selectedCity)
                    .map((accommodation: Property, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-[40px] p-4 bg-slate-100 justify-start overflow-hidden '>
                            <img src={accommodation.image} alt={accommodation.name} className='w-auto max-h-[450px] object-cover' />
                            <div className='flex flex-col h-full gap-4 '>
                                <h3 className='text-2xl font-sans text-primary'>{accommodation.name}</h3>
                                <span className='text-lg italic '><LocationOn className='text-xl' /> {accommodation.address}</span>
                                <p className='text-lg font-sans text-secondary'>{accommodation.description}</p>
                                <div>
                                    <ul className='flex flex-wrap gap-2 mt-2'>
                                        {accommodation.amenities.map((amenity, index) => {
                                            return (
                                                <li key={index} className="bg-accent p-2 ring-1 ring-inset ring-red-600/10 rounded-md text-sm shadow-sm">{amenity}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default AccomodationSection;