import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ArrowForward, CheckSharp, Close } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface Props {
    section: CabinSection;
}

const CabinModal: React.FC<Props> = ({ section }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <a className='btn-primary' onClick={() => { setShowModal(true) }} >View Inclusions</a>
            <div className="container mx-auto flex flex-col w-full">
                <Dialog open={showModal} onClose={setShowModal} className="z-10 max-h-svh">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="pb-3 transform overflow-hidden bg-white text-center w-full shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-screen-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative">
                                    <button
                                        type="button"
                                        aria-label="Close panel"
                                        onClick={() => setShowModal(false)}
                                        className="absolute top-0 right-0 p-4 max-md:p-1 text-basegrey"
                                    >
                                        <Close className="text-xl mb-1" />
                                    </button>
                                    <div className="flex  w-full">
                                            <div className="w-full">
                                                <DialogTitle as="h3" className="text-2xl font-bold leading-6 text-primary my-1">
                                                    {section.subtitle}
                                                </DialogTitle>
                                                <div className="mt-4">
                                                    {section.child?.map((child, index) => {
                                                        return (
                                                            <div key={index} className="flex flex-col gap-1">
                                                                <p className='text-xl'>{child.title}</p>
                                                                <div className='grid grid-cols-2 text-left justify-center justify-items-left'>
                                                                    {child.child?.map((subChild, idx) => {
                                                                        return (
                                                                            <span key={idx} className="text-basegrey my-2"><CheckSharp/> {subChild.description}</span>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </div>
        </>
    )
};

const LetterSvg = ({ iconName, className }: { iconName: string, className?: string }) => (
    <svg className={className} viewBox="0 0 24 24">
        <use href={`/assets/icons/icons_v1.svg#${iconName}`} />
    </svg>
);

export default CabinModal;
