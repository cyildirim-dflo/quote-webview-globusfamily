import { ExpandLess, ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';
import importantInformationImage from '../assets/important_information.png';

interface CollapsibleItem {
    id: string;
    title?: string;
    content?: string;
    isOpen?: boolean;
}

interface Props {
    section: ImportantInformationSection;
    id: string;
}

const ImportantInformation: React.FC<Props> = ({ id, section }) => {

    const initialItems: CollapsibleItem[] = section.erratas.map((errata, index) => {
        return {
            id: `important-${index}`,
            title: errata.title,
            content: errata.description,
            isOpen: false
        }
    });

    const [collapsibleItems, setCollapsibleItems] = useState<CollapsibleItem[]>(initialItems);


    const toggleSection = (itemId: string) => {
        setCollapsibleItems((prevItems) =>
            prevItems.map((item) => {
                return item.id === itemId ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
            }
            )
        );
    };

    return (
        <div className='py-[120px] max-md:py-[60px]'>
            <img src={importantInformationImage.src} className='max-w-screen-xl container mx-auto max-md:h-[300px] max-md:object-cover' />
            <div className='max-w-screen-xl container mx-auto'>
                {section.subtitle && (
                    <h2 className="text-3xl text-primary-950 font-semibold text-center p-7 py-[50px]">
                        {section.subtitle}
                    </h2>
                )}
                {section.description && (
                    <p className="p-4">{section.description}</p>
                )}
                <div className='max-w-screen-lg flex flex-col gap-2 mx-auto'>
                    {collapsibleItems.map((item) => (
                        <div key={item.id} className=' border-secondary border-[3px] border-solid max-md:mx-6 '>
                            <div onClick={() => toggleSection(item.id)} className='flex flex-row place-items-center justify-between py-[15px] px-5 cursor-pointer'>
                                <h2 className='font-sans font-bold'>{item.title}</h2>
                                <button className="max-md:mr-1 mr-[20px] z-30">{item.isOpen ? <ExpandLess className='text-2xl' /> : <ExpandMore className='text-2xl' />}</button>
                            </div>
                            {item.isOpen && (
                                <div className='p-3'>
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImportantInformation;