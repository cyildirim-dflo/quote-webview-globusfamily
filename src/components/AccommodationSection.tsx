import React from 'react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropertyModal from './itinerary/PropertyModal';

interface Props {
    section: AccommodationSection
}

const AccomodationSection: React.FC<Props> = ({ section }) => {
    return (
        <div className='w-full min-h-96 py-[80px] max-w-screen-xl mx-auto'>
            <h2 className='text-4xl md:text-5xl text-center mb-[40px] w-auto font-serif text-brownish'>{section.title}</h2>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                className='cabin-image-slider'
            >
                {section.accommodations.map((accommodation : Property, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col gap-[40px] justify-center items-center overflow-hidden '>
                            <img src={accommodation.image} alt={accommodation.name} className='w-auto max-h-[450px] object-cover' />
                            <h3 className='text-2xl font-sans'>{accommodation.name}</h3>
                            <PropertyModal property={accommodation}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AccomodationSection;