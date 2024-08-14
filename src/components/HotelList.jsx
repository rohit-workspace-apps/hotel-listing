
import React, { useEffect, useState } from 'react';
import HotelCard from './HotelCard';
import Pagination from './Pagination';
import axios from 'axios';
import { RingLoader } from 'react-spinners';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(5);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('/hotels.json');
        console.log(response.data.HotelList);
        setHotels(response.data.HotelList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the hotels:', error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      {loading ? (
        <div className="text-center">
          <RingLoader color="#3445db" />
        </div>
      ) : (
        <>
          <div className="row">
            {currentHotels.map((hotel, index) => (
              <div key={index} className="col-md-4">
                <HotelCard hotel={hotel} />
              </div>
            ))}
          </div>
          <Pagination
            hotelsPerPage={hotelsPerPage}
            totalHotels={hotels.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default HotelList;
