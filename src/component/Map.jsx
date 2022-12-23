import React from 'react';

const Map = () => {
  return (
    <div className="h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.247574929642!2d106.833351!3d-6.181082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x600a7ff8254f640d!2sMinistry%20of%20Trading!5e0!3m2!1sen!2sid!4v1671750522905!5m2!1sen!2sid"
        className="w-full h-full"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
