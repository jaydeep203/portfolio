import React from 'react';
import AdminComp from '../../components/AdminComp';

const Page = () => {
  return (
    <div className="adminPanel">
        <div className="adminPanelContainer">
          <AdminComp />
        </div>
    </div>
  )
}

export default Page

export const metadata = {
  title: 'Admin-Panel',
  description: 'Admin-Panel for Portfolio App.'
}
