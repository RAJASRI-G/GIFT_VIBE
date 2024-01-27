import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Gift.css';
import abc from '../assets/images/star.webp';
import efg from '../assets/images/mem2.jpg';
import hij from '../assets/images/mem6.avif';
import klm from '../assets/images/quote.webp';
import nop from '../assets/images/spotify.webp';
import qrs from '../assets/images/lyrics.jpg';
import Good from '../assets/images/gv.png';
import '../assets/css/Gift.css'; // Import PhotoGrid.css for styling

const PhotoGrid = () => {
  const photos = [
    {
      id: 1,
      url: abc,
      caption: 'Frames',
      linkTo: '/star', // Replace with the desired route
    },
    {
      id: 2,
      url: efg,
      caption: 'Birthday',
      linkTo: '/memory', // Replace with the desired route
    },
    {
      id: 3,
      url: hij,
      caption: 'Chocolate',
      linkTo: '/choco', // Replace with the desired route
    },
    {
      id: 4,
      url: klm,
      caption: 'Quote Prints',
      linkTo: '/photo/2', // Replace with the desired route
    },
    {
      id: 5,
      url: nop,
      caption: 'Spotify Prints',
      linkTo: '/photo/1', // Replace with the desired route
    },
    {
      id: 6,
      url: qrs,
      caption: 'Lyrics Prints',
      linkTo: '/photo/2', // Replace with the desired route
    },
    // Add more photos as needed
  ];

  return (
    <div>
    <div className="head1">
    <div className="good"> {/* Apply opacity to the container */}
    <img src={Good} alt="Background" />
    </div>
    </div>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <Link to={photo.linkTo} className="photo-link">
              <img src={photo.url} alt={`Photo ${photo.id}`} className="photo-img" />
              <div className="photo-caption">{photo.caption}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
