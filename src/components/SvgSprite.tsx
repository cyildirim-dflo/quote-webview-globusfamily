import React from 'react';

const SvgSprite = ({ className, iconName, viewBox }: { className?: string; iconName: string; viewBox?: string }) => {
    return (
        <svg className={className} viewBox={viewBox} >
            <use href={`/assets/icons/icons_v1.svg#${iconName}`} />
        </svg>
    );
};

export default SvgSprite;