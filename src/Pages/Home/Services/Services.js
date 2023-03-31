import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';


export default function Services() {
 const [service, setService] = useState([]);
 useEffect(() => {
  fetch('service.json')
  .then(res => res.json())
  .then(data =>setService(data))
 }, []);
  return (
    <div className='text-center mb-4'>
      <p className='text-orange-600 text-bold text-2xl '>Services</p>
      <h1 className="text-5xl font-semibold mb-2">Our service area</h1>
      <p className='mb-4'>The majority have suffered alteration in some form, by injected humour,<br/> or randomised words which don't look even slightly believable. </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.map((item) => <ServiceCard
        key={item._id}
        item={item}
        ></ServiceCard>
          
              )
        }
      </div>
    </div>
  )
}
