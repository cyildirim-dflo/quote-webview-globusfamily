import React from 'react';
import PropertyModal from './itinerary/PropertyModal';
import { Hotel, LocationCity, LocationOn } from '@mui/icons-material';

interface Props {
    section: AccommodationSection
}

const AccomodationSection: React.FC<Props> = ({ section }) => {

    const cities = section.accommodations.map((accommodation: Property) => accommodation.city);
    const uniqueCities = Array.from(new Set(cities));
    const [selectedCity, setSelectedCity] = React.useState(uniqueCities[0]);

    return (
        <div className='w-full min-h-96 py-[80px] max-w-screen-xl mx-auto'>
            <h2 className='text-4xl md:text-5xl text-center mb-[40px] w-auto font-serif text-brownish'>{section.title}</h2>
            <div className='flex flex-row gap-[20px] items-center w-full mb-3'>
                {uniqueCities.map((city, index) => (
                    <button key={index} onClick={() => setSelectedCity(city)} className={`bg-accent uppercase py-6 px-10 text-lg font-sans bg0 ${selectedCity === city ? 'bg-primary text-white ' : ' '}`}>{city}</button>
                ))}
            </div>
            <div className='flex flex-col gap-[40px] overflow-hidden '>
                {section.accommodations.filter((accommodation: Property) => accommodation.city === selectedCity)
                    .map((accommodation: Property, index) => (
                        <div key={index} className='flex flex-row gap-[40px] p-4 bg-slate-100 justify-start overflow-hidden '>
                            <img src={accommodation.image} alt={accommodation.name} className='w-auto max-h-[450px] object-cover' />
                            <div className='flext flex-col h-full gap-2'>
                                <h3 className='text-2xl font-sans text-primary'>{accommodation.name}</h3>
                                <span className='text-lg italic '><LocationOn/> {accommodation.address}</span>
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