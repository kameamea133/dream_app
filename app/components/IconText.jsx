import React from 'react';
import Image from 'next/image';

const IconText = ({ imageSrc, description, imageAlt = '', imageSize = 24 }) => {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image src={imageSrc} alt={imageAlt} width={imageSize} height={imageSize} />
        </div>
        <div>
          {description && <p className="text-xs text-gray-600">{description}</p>}
        </div>
      </div>
    );
  }

export default IconText;
