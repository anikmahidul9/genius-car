import React from 'react'

export default function ServiceCard({item}) {
    const {title,img,price}=item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
    </div>
      <div className='flex justify-between p-4 ml-4'>
      <p className='text-orange-500'>Price: ${price}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Get</button>
      </div>
      </div>
  </div>
  )
}
