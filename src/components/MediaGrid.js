import React, { useState } from 'react';
import '../styles/MediaGrid.css'; // Import your custom styles

// Import images and videos
import image1 from '../images/portfolio/image1.jpg';
import image10 from '../images/portfolio/image10.jpg';
import image11 from '../images/portfolio/image11.jpg';
import image12 from '../images/portfolio/image12.jpg';
import image13 from '../images/portfolio/image13.jpg';
import image2 from '../images/portfolio/image2.jpg';
import image3 from '../images/portfolio/image3.jpg';
import image4 from '../images/portfolio/image4.jpg';
import image5 from '../images/portfolio/image5.jpg';
import image6 from '../images/portfolio/image6.jpg';
import image7 from '../images/portfolio/image7.jpg';
import image8 from '../images/portfolio/image8.jpg';
import image9 from '../images/portfolio/image9.jpg';

const mediaItems = [
  { type: "image", src: image1, alt: "Image 1" },
  { type: "image", src: image2, alt: "Image 2" },
  { type: "youtube", src: "https://www.youtube.com/embed/mJ2-_QBsqo8", alt: "Video" },
  { type: "image", src: image3, alt: "Image 3" },
  { type: "image", src: image4, alt: "Image 4" },
  { type: "image", src: image5, alt: "Image 5" },
  { type: "youtube", src: "https://www.youtube.com/embed/ICZ-dVHJDcE", alt: "Vid2eo" },
  { type: "image", src: image6, alt: "Image 6" },
  { type: "image", src: image7, alt: "Image 7" },
  { type: "youtube", src: "https://www.youtube.com/embed/_ySq2WOrT_E", alt: "YouTube Video" },
  { type: "youtube", src: "https://www.youtube.com/embed/Eo0zk5XT4ZA", alt: "Vid2eo" },
  { type: "image", src: image8, alt: "Image 8" },
  { type: "youtube", src: "https://www.youtube.com/embed/oT29-ynAtE8", alt: "Vid2eo" },
  { type: "image", src: image9, alt: "Image 9" },
  { type: "image", src: image10, alt: "Image 10" },
  { type: "image", src: image11, alt: "Image 11" },
  { type: "image", src: image12, alt: "Image 12" },
  { type: "image", src: image13, alt: "Image 13" }
];

const MediaGrid = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  // Function to open the lightbox for mobile devices
  const openLightbox = (videoSrc) => {
    if (window.innerWidth <= 768) { // Only trigger lightbox on mobile devices
      setCurrentVideo(videoSrc);
      setLightboxOpen(true);
    }
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentVideo('');
  };

  return (
    <div>
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <div className="media-item" key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <iframe
                src={item.src}
                title={item.alt}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={() => openLightbox(item.src)} // Open lightbox on video click
              ></iframe>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox for videos */}
      {lightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <iframe
              src={currentVideo}
              title="Lightbox Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-lightbox" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGrid;








