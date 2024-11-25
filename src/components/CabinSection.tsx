import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CabinModal from './pricing/CabinModal';

interface Props {
    section: CabinSection;
}

const CabinSection: React.FC<Props> = ({ section }) => {
    const cabinDetail = section.cruiseDetails.cabinDetails[section.cabinIdentifier];

    return (
        <div>
            <div className="w-full flex flex-col max-md:pb-[40px] pb-[80px] pt-[80px] text-center px-[20px] bg-accent font-serif">
                <div className="max-w-screen-2xl mx-auto">
                    <h3 className='text-4xl md:text-5xl text-primary mb-[40px] font-serif'>{section.title}</h3>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={50}
                        scrollbar={{ draggable: true }}
                        navigation
                        className='cabin-image-slider'
                    >
                        {cabinDetail?.images.map((image, index) => {
                            return (
                                <SwiperSlide key={index} className='w-full md:px-48'>
                                    <img src={image} alt={cabinDetail?.name} className='w-full md:w-1/2 mx-auto' />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className='flex flex-col gap-[40px] mt-[40px]'>
                    <h2 className='text-3xl'>{cabinDetail?.name}</h2>
                    <div className='flex flex-col place-items-center items-sd overflow-hidden w-full'>
                        {cabinDetail && (<CabinModal section={section} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CabinSection;