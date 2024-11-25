import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Close } from '@mui/icons-material';


interface Props {
    property: Property;
}

const PropertyModal: React.FC<Props> = ({ property }) => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <a className="btn-primary" onClick={() => { setShowModal(true) }} >View Accommondation</a>
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
                                className="pb-3 transform overflow-hidden bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <img src={property.image} alt={property.name} className="w-full object-cover h-60" loading='lazy' decoding='async' />
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="absolute top-0 right-0 p-4 max-md:p-1"
                                    >
                                        <Close className="text-primary-950 text-2xl" />
                                    </button>
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle as="h3" className="text-lg font-bold leading-6 text-primary-950">
                                                {property.name}
                                            </DialogTitle>
                                            <h4 className="font-semibold text-primary-950 mt-2">
                                                {property.address}
                                            </h4>
                                            <div className="mt-2">
                                                <p className="text-primary-950">
                                                    {property.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white px-4 py-5 sm:p-6 sm:pb-4 sm:ml-4'>
                                    <h3 className='text-lg font-semibold text-primary-950'>Amenities</h3>
                                    <ul className='flex flex-wrap gap-2 mt-2'>
                                        {property.amenities.map((amenity, index) => {
                                            return (
                                                <li key={index} className="bg-accent p-2 ring-1 ring-inset ring-red-600/10 rounded-md text-sm shadow-sm">{amenity}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </div>
        </>
    )
};


export default PropertyModal;