import React from 'react';


interface Props {
    section: PricingSection;
    id: string;
}


const Pricing: React.FC<Props> = ({ section, id }) => {
    const cabin = section.pricing.cruiseData?.cabins[0];
    return (
        <div className='w-full bg-white'>
            <div className='flex flex-col max-md:px-2 pt-[80px] max-w-screen-2xl mx-auto'>
                <h2 className="font-serif text-4xl md:text-5xl text-center text-brownish mb-[40px]">
                    {section.title}
                </h2>
                <div className='bg-accent mx-auto w-full max-w-screen-xl flex flex-col bg-sectionbg py-[10px] md:py-[30px] md:px-[200px] gap-6 text-center'>
                    <span className='mb-[10px] text-xl'>The total price of your holiday is {section.pricing.sellingPrice}</span>
                    <p className='text-xl'>
                        As you are planning on travelling within ten weeks of making your booking, the full payment of {section.pricing.deposit} will be required upon confirmation. Thank you.
                    </p>

                    <p className='text-xl'>Call: <strong>{section.contactNumber}</strong> to finalise your booking.</p>
                </div>
            <div className='mx-auto w-full max-w-screen-xl flex flex-col py-[10px] mt-[10px] gap-6 text-center' >
                    <div>
                        <h2 className='text-xl uppercase font-bold'>Booking terms and conditions </h2>
                        <p className='text-xl'>
                            Please ensure you read our Booking Conditions, which can be found in full on our website. Payment of a deposit confirms you have read and accept our   <a href="https://www.globusjourneys.co.uk/terms/" className="font-semibold">Terms and Conditions</a> .
                            <br />
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl uppercase font-bold'>Important travel information</h2>
                        <p className='text-xl'>
                            Please ensure you refer to the Important Travel Information section located within this quotation document.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl uppercase font-bold'>Accepted forms of payment</h2>
                        <p className='text-xl'>
                            To pay a deposit or the full amount for your holiday, please click the 'Book Trip' button below or call your Travel Consultant. Globus accepts payments by direct debit, credit card or bank transfer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Pricing;