import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Anchor, Close } from '@mui/icons-material';


interface Props {
    description: string;
    title: string;
    image?: string;
}

const ExcursionModal: React.FC<Props> = ({ title, description, image }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <a className="text-lg font-bold text-primary cursor-pointer" onClick={() => { setShowModal(true) }} >{title}</a>
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
                                className="pb-3 rounded-xl transform overflow-hidden bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white flex flex-col">
                                    <div className="flex flex-row bg-deepdusk py-6 px-6 justify-between">
                                        <h2 className="text-lg  text-purewhite"><Anchor className='text-xl mb-1 mr-2' /> {title}</h2>
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="text-purewhite"
                                        >
                                            CLOSE <Close className="text-2xl mb-1" />
                                        </button>
                                    </div>

                                    <img src={image} alt={title} className="w-full h-[300px] object-cover" />
                                    <div className="sm:flex sm:items-start p-6">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle as="h3" className="text-4xl text-primary">
                                                {title}
                                            </DialogTitle>
                                            <div className="mt-2">
                                                <p className="text-primary-950 text-lg">
                                                    {description}
                                                </p>
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


export default ExcursionModal;
