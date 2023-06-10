import React from 'react';
import ProjectComp from '../../components/ProjectComp';

const page = () => {
  return (
    <div className="projects">
        <ProjectComp  />
    </div>
  )
}

export default page

export const metadata = {
  title: 'Project',
  description: 'Project for Portfolio App.'
}
