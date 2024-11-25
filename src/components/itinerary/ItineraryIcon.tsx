import React from 'react';
import { ItineraryItemStyle } from '../../types/enums';

interface ItineraryIconProps {
    icon: ItineraryItemStyle | undefined;
    className?: string;
}

const ItineraryIcon: React.FC<ItineraryIconProps> = ({ icon, className }) => {
    const iconPath = `/assets/icons/${icon ?? ItineraryItemStyle.Location}.svg`;

    return <img src={iconPath} alt={icon} className={className ?? "h-[32px]"} />;
};

export default ItineraryIcon;