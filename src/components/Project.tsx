import ProjectCard from './ProjectCard'
import Right from '../assets/right.svg'
import Left from '../assets/left.svg'

import Queue from '../assets/project1.png'
import Tickitz from '../assets/project2.png'
import DefaultPic from '../assets/default.svg'

const projects = [
    {
        image:Queue,
        title:"Queue App",
        description: "A simple, customizable queue display app for healthcare practices. Built with React and Tailwind CSS, and enhanced with custom audio for patient number announcements using use-sound.",
        stack: "React js, Tailwind CSS",
        link: "http://queue-app-iota.vercel.app"
    },
    {
        image:Tickitz,
        title:"Tickitz",
        description: "A modern and responsive web application designed for users to seamlessly browse movie and book tickets focused on user experience and clean UI.",
        stack: "React js, Redux Toolkit, Golang (Gin), PostgreSQL, Redis, JWT",
        link: "http://rrhmn.my.id"
    },
    {
        image:DefaultPic,
        title:"Emados Project",
        description: "Built a backend service to deliver promotional content from ESB API to users in real-time using Firebase Cloud Messaging (FCM).",
        stack: "Golang (Gin), FCM, OAuth, JWT, PostgreSQL, Redis",
        link: ""
    },
]

function Project() {
  return (
    <div className='mx-15 my-10 px-5 py-5'>
        <div className='text-5xl text-center py-3'>Works</div>
        <div className='flex flex-row gap-5 items-center justify-between py-2'>
            <div className='bgbutton'>
                <img src={Left} alt="Previous" className='w-[20px] h-[20px]'/>
            </div>
            <div className='flex flex-row gap-5 w-3/4'>
                {projects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    stack={project.stack}
                    link={project.link}
                  />
                ))}
            </div>
            <div className='bgbutton'>
                <img src={Right} alt="Next" className='w-[20px] h-[20px]'/>
            </div>
        </div>
    </div>
  )
}

export default Project
