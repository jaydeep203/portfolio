import React from 'react';
import ContactComp from '../../components/ContactComp';

const page = () => {
  return (
    <div className="contact">
      
      <ContactComp />

    </div>
  )
}

export default page

export const metadata = {
  title: 'Contact',
  description: 'Contact for Portfolio App.'
}
