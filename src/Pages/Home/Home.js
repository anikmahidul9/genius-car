import React, { useEffect, useState } from 'react'
import About from './About'
import Banner from './Banner'
import Review from './Review/Review'
import Services from './Services/Services'
import Summery from './Summery'

export default function Home() {

  return (
    <>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Summery></Summery>
    <Review></Review>
    </>
  )
}
