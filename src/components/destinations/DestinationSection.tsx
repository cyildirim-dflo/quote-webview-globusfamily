import React, { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { stripHtml } from "string-strip-html";


interface Props {
    section: DestinationSection
}
const DestinationSection: React.FC<Props> = ({ section }) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [, setActiveIndex] = useState(swiperRef.current?.activeIndex);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            if (!swiper) return;

            const handleSlideChange = () => {
                setActiveIndex(swiper.activeIndex);
            };

            swiper.on('slideChange', handleSlideChange);

            return () => {
                swiper.off('slideChange', handleSlideChange);
            };
        }
    }, [swiperRef]);

    return (
        <div className='bg-white'>
            <div className='max-w-screen-xl py-[80px] max-md:py-[60px] transition ease-in-out bg-sectionbg px-[20px] mx-auto destination-swiper'>
                <h3 className='text-4xl md:text-5xl mb-[40px] text-center'>{section.title}</h3>
                <Swiper
                    modules={[Navigation]}
                    onInit={(swiper) => {
                        swiperRef.current = swiper;
                        setActiveIndex(0)
                    }}
                    slidesPerView={1}
                    spaceBetween={50}
                    scrollbar={{ draggable: true }}
                    navigation>
                    {section.highlights.map((highlight, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col'>
                                    <div className='w-full'>
                                        <img src={highlight.image} className='max-w-prose h-[400px] mx-auto object-cover' />
                                    </div>
                                    <div className='flex flex-col w-full pt-8 md:px-20 gap-[20px] text-center'>
                                        {swiperRef.current && (
                                            <h5 className='text-lg uppercase tracking-wider'>{swiperRef.current?.activeIndex + 1} / {swiperRef.current?.slides.length}</h5>
                                        )}
                                        <h4 className='text-4xl '>{highlight.title}</h4>
                                        <p>{stripHtml(highlight.description).result}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default DestinationSection;