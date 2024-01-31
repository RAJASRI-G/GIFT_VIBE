import React, { useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');

  const photos = [
    {
      id: 1,
      url: abc,
      caption: 'Frames',
      linkTo: '/star',
    },
    {
      id: 2,
      url: efg,
      caption: 'Birthday',
      linkTo: '/memory',
    },
    {
      id: 3,
      url: hij,
      caption: 'Chocolate',
      linkTo: '/choco',
    },
    {
      id: 4,
      url: klm,
      caption: 'Quote Prints',
      linkTo: '/photo/2',
    },
    {
      id: 5,
      url: nop,
      caption: 'Spotify Prints',
      linkTo: '/photo/1',
    },
    {
      id: 6,
      url: qrs,
      caption: 'Lyrics Prints',
      linkTo: '/photo/2',
    },
  ];

  const filteredPhotos = photos.filter(photo =>
    photo.caption.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="head1">
        <div className="good">
          <img src={Good} alt="Background" />
        </div>
        <div className="search-box-container">
          <input
            type="text"
            placeholder="Search by Course Name"
            value={searchQuery}
            onChange={handleInputChange}
            className="star-search-bar"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3Cpath fill="currentColor" d="M15.7 14.3L12.3 11c.3-.6.5-1.3.5-2 0-2.5-2-4.5-4.5-4.5S3.8 6.5 3.8 9 5.8 13.5 8.3 13.5c.7 0 1.4-.2 2-.5l3.3 3.3c.1.1.3.2.4.2.2 0 .4-.1.5-.2.5-.4.5-1.1.1-1.5zm-7.4-2.2c-1.9 0-3.5-1.5-3.5-3.5S6.4 5.3 8.3 5.3 11.8 6.8 11.8 8.7s-1.6 3.4-3.5 3.4z"%3E%3C/path%3E%3C/svg%3E')`,
              backgroundPosition: 'calc(100% - 8px) center',
              backgroundRepeat: 'no-repeat',
              paddingLeft: '20px',
            }}
          />
        </div>
      </div>
      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
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



// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Gift.css';
// import abc from '../assets/images/star.webp';
// import efg from '../assets/images/mem2.jpg';
// import hij from '../assets/images/mem6.avif';
// import klm from '../assets/images/quote.webp';
// import nop from '../assets/images/spotify.webp';
// import qrs from '../assets/images/lyrics.jpg';
// import Good from '../assets/images/gv.png';
// import '../assets/css/Gift.css'; // Import PhotoGrid.css for styling

// const PhotoGrid = () => {
//   const photos = [
//     {
//       id: 1,
//       url: abc,
//       caption: 'Frames',
//       linkTo: '/star', // Replace with the desired route
//     },
//     {
//       id: 2,
//       url: efg,
//       caption: 'Birthday',
//       linkTo: '/memory', // Replace with the desired route
//     },
//     {
//       id: 3,
//       url: hij,
//       caption: 'Chocolate',
//       linkTo: '/choco', // Replace with the desired route
//     },
//     {
//       id: 4,
//       url: klm,
//       caption: 'Quote Prints',
//       linkTo: '/photo/2', // Replace with the desired route
//     },
//     {
//       id: 5,
//       url: nop,
//       caption: 'Spotify Prints',
//       linkTo: '/photo/1', // Replace with the desired route
//     },
//     {
//       id: 6,
//       url: qrs,
//       caption: 'Lyrics Prints',
//       linkTo: '/photo/2', // Replace with the desired route
//     },
//     // Add more photos as needed
//   ];

//   return (
//     <div>
//     <div className="head1">
//     <div className="good"> {/* Apply opacity to the container */}
//     <img src={Good} alt="Background" />
//     </div>

//     </div>
//       <div className="photo-grid">
//         {photos.map((photo) => (
//           <div key={photo.id} className="photo-item">
//             <Link to={photo.linkTo} className="photo-link">
//               <img src={photo.url} alt={`Photo ${photo.id}`} className="photo-img" />
//               <div className="photo-caption">{photo.caption}</div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGrid;
