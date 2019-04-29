import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0372753333236!2d67.08203521447892!3d24.930800048575833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4f32ac77d7%3A0xd5c01d981c97c50c!2sUBL+Sports+Complex!5e0!3m2!1sen!2s!4v1556525401776!5m2!1sen!2s"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
