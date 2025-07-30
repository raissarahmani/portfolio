import React from 'react'

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  stack: string;
  link: string;
}

function ProjectCard({image, title, description, stack, link}: ProjectCardProps) {
  return (
    <div className='card p-5 w-[250px]'>
      <div className='card mb-2'><img src={image} alt={title} className='object-contain w-full h-[100px]' /></div>
      <div className='text-lg text-[#5046b4] font-semibold'>{title}</div>
      <div className='my-1 h-[150px] font-light text-sm text-justify'>{description}</div>
      <div className='text-sm font-semibold mt-3 h-[50px]'>{stack}</div>
      <a href={link} className='text-sm text-[#5046b4] font-bold'>See project</a>
    </div>
  )
}

export default ProjectCard
