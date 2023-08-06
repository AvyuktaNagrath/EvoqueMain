import { useState, useEffect, useRef } from "react";

const images = [
  "/images/kaden_jerry.JPG",
  "/images/gym_background.jpg",
  "/images/Charity.jpg",
];

const links = [
  "/page1",
  "/page2",
  "/page3",
];

const headers = ["Welcome to Page 1", "Gym Training", "Charity Work"];

const paragraphs = [
  "Explore the adventures of Page 1.", 
  "Join us in our intensive gym training!", 
  "Learn more about our charity work."
];

function BackgroundCarousel() {
  const [activeImage, setActiveImage] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    images.forEach((image) => {
      new window.Image().src = image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevActiveImage) => {
        const nextActiveImage = (prevActiveImage + 1) % images.length;

        sliderRef.current.style.transform = `translateX(-${(100 * nextActiveImage) / images.length}%)`;
        setTimeout(() => (sliderRef.current.style.transition = "transform 1s ease-in-out"), 50);
        
        return nextActiveImage;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          width: `${100 * images.length}%`,
          height: "100%",
          transform: `translateX(-${(100 * activeImage) / images.length}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {/* All images */}
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => (window.location.href = links[index])}
            style={{
              cursor: 'pointer',
              display: "flex",
              flexShrink: 0,
              width: `${100 / images.length}%`,
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: 'white', textShadow: '2px 2px 4px #000000' }}>{headers[index]}</h1>
            <p style={{ color: 'white', textShadow: '2px 2px 4px #000000' }}>{paragraphs[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackgroundCarousel;
