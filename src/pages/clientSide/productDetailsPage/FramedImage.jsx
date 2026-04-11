import React from 'react';

const FramedImage = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Background shape */}
      <div className="absolute inset-0 bg-blue-600 rounded-full clip-path-custom"></div>

      {/* Image with custom shape */}
      <div className="relative z-10">
        <img 
          src="https://media.istockphoto.com/id/1370772148/photo/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-spain.jpg?s=612x612&w=0&k=20&c=QJn62amhOddkJSbihcjWKHXShMAfcKM0hPN65aCloco=" 
          alt="Framed Kids" 
          className="w-full h-auto rounded-full object-cover clip-path-custom" 
        />
      </div>
    </div>
  );
};

export default FramedImage;
