import React from 'react';

interface Props {
    section: WhyChooseUsSection;
    key: string;
}

const WhyChooseUs: React.FC<Props> = ({ section }) => {

    return (
        <div className='py-[120px] max-md:py-[60px] transition ease-in-out bg-gray-50'>
            <div id={section.type} className="max-w-screen-lg container mx-auto  max-md:px-6">

                {section.title && (
                    <h2 className="text-3xl text-primary-950 font-semibold text-center my-[50px]">
                        {section.title}
                    </h2>
                )}
                {section.description && (
                    <p>{section.description}</p>
                )}

                {section.link && (
                    <a href={section.link.url} className="text-primary-800">{section.link.label ?? section.link.url}</a>
                )}

                {section.child && (
                    <ul className='list-disc list-outside px-4 max-md:pl-6'>
                        {section.child.map((section, index) => (
                            <li key={index}>
                                {section.description}
                            </li>
                        ))}
                    </ul>
                )}

                {section.testimonials && (
                    <>
                        <hr className='h-[4px] bg-secondary w-full my-[50px]' />
                        <div className='grid  grid-col-1 md:grid-cols-2 gap-5 gap-y-8 my-10 testimonial-container' id="testimonial-container">
                            {section.testimonials.map((testimonial, index) => (
                                <div key={index}>
                                    <p>{testimonial.quote}</p>
                                    <p className='font-bold'>{testimonial.name}</p>
                                </div>
                            ))}

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default WhyChooseUs;