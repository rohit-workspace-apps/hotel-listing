
import React from 'react';
import hotelImage from '../components/images/1.jpg';

const HotelCard = ({ hotel }) => {
  const handleChooseRoom = () => {
    alert(`Room chosen for ${hotel.HotelName}`);
  };
  console.log("data==>", hotel.ThumbNailURL);

  const cardBodyStyle = {
    color: '#DCDCDC.',
  };

  return (
    <div className="card mb-4">

      {/* <img src={hotel.ThumbNailURL} className="card-img-top" alt={hotel.name} /> */}
      <img src={hotelImage} className="card-img-left" alt={hotel.name} />

      <div className="card-body" style={cardBodyStyle}>
        <button type="button" class="btn btn-primary btn-sm">ID:{hotel.LocalHotelId}</button>

        <h5 className="card-title">{hotel.HotelName}</h5>
        <p className="card-text">
          {hotel.Address} <br />
          {hotel.PropertyRating} ⭐ <br />
          ${hotel.TotalCharges} per night
        </p>
        <button
          className="btn btn-primary"
          onClick={handleChooseRoom}
        >
          Choose Room
        </button>
      </div>
    </div >
  );
};

export default HotelCard;
