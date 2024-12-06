import { Navigation } from '@mui/icons-material';
import React from 'react';

interface Props {
    companyName: string;
}

const Footer: React.FC<Props> = ({ companyName }) => {
    return (
        <div className="flex flex-col w-full bg-accent">
            <div className="text-center max-w-screen-xl mx-auto py-[80px]">
                <h3 className="text-3xl font-serif mb-4 border-y border-[#FEBC11] inline-block mt-0px relative p-2">
                    <Navigation className="text-[#FEBC11] nav-icon"  />
                    You Dream <span className="text-[#FEBC11] text-[60px] leading-[1px] mr-4">.</span>  
                    We Plan <span className="text-[#FEBC11] text-[60px] leading-[1px]">.</span>
                </h3>
                <p className="text-xl w-full text-center font-light">
                    Globus takes you beyond the guidebooks with more ways to discover each destination.
                </p>
                <div className="flex flex-col md:flex-row">
                    <div className="p-4">
                        <h2 className="text-primary text-2xl font-serif">Local Favorites</h2>
                        <p className="text-lg">
                            Globus helps you get out there and really experience your destination! We take you behind the scenes to spotlight what makes this exciting destination unique - and to introduce you to its local flavors.
                        </p>
                    </div>
                    <div className="p-4">
                        <h2 className="text-primary text-2xl font-serif">Tour Highlights</h2>
                        <p className="text-lg">
                            Discover something unexpected and unforgettable in the special way only Globus can share—with sightseeing highlights to off-the-beaten-path surprises to out-of-this world moments you’ll remember for a lifetime!
                        </p>
                    </div>
                    <div className="p-4">
                        <h2 className="text-primary text-2xl font-serif">Enhanced Free Time</h2>
                        <p className="text-lg">
                            Explore or relax as you please, or choose exciting options available at MyGlobus. Get local maps and free time tips on your GlobusGO mobile app. Your Tour Director can suggest the perfect way to design your day!
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="tracking-[1px] font-sans font-medium text-white text-lg text-center px-2 bg-accentalt py-[60px]">
                    © {new Date().getFullYear()} {companyName}. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
