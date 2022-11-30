import { useQuery } from '@tanstack/react-query';
import React from 'react';
import OrderCard from './OrderCard';

const MyOrders = () => {

  const { data: mybookings = [], isLoading, refetch } = useQuery({
    queryKey: ['mybookings'],
    queryFn: () => fetch('https://reseller-server-lime.vercel.app/mybookings')
      .then(res => res.json())
  })

  return (
    <div>
      {
        mybookings.map(booking=><OrderCard
        key={booking._id}
        booking={booking}
        isLoading
        refetch
        ></OrderCard>
               
          )}
    </div>
  );
};

export default MyOrders;