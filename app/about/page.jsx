import React from 'react';
import AboutComp from "../../components/AboutComp";

const page = () => {

  // const user = await useSelector((state)=>state.userData.userData);
  // const about = user.about;

  return (
    <div>
      <div className='about'>
        <AboutComp />
      </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'About',
  description: 'About for Portfolio App.'
}
