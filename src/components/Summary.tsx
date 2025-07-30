import Phone from '../assets/phone.svg'
import Mail from '../assets/mail.svg'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'

function Summary() {
  return (
    <div className='mx-15 my-10 px-15 py-5 summary'>
        <div className='py-2 border-b border-[#fff]'>
            <div className='text-5xl mb-2'>Raissa Rahmani Putri</div>
            <div className='flex flex-row gap-10 justify-start'>
                <div className='flex flex-row items-center transition-transform duration-300 hover:scale-105 hover:font-semibold'>
                    <img src={Phone} alt="Phone" className='w-[15px] h-[15px] mr-2'/>
                    <div className='highlight'>+6281233776681</div>
                </div>
                <div className='flex flex-row items-center transition-transform duration-300 hover:scale-105 hover:font-semibold'>
                    <img src={Mail} alt="Email" className='w-[15px] h-[15px] mr-2'/>
                    <div className='highlight'>raissarahmani18@gmail.com</div>
                </div>
                <div className='flex flex-row items-center transition-transform duration-300 hover:scale-105 hover:font-semibold'>
                    <img src={Linkedin} alt="Linkedin" className='w-[15px] h-[15px] mr-2'/>
                    <a href="http://linkedin.com/in/raissarahmani" className='highlight'>LinkedIn</a>
                </div>
                <div className='flex flex-row items-center transition-transform duration-300 hover:scale-105 hover:font-semibold'>
                    <img src={Github} alt="Github" className='w-[20px] h-[20px] mr-2'/>
                    <a href="http://github.com/raissarahmani" className='highlight'>Github</a>
                </div>
            </div>
        </div>
        <p className='text-justify py-2'>A <span className='highlight'>fullstack developer</span> with 1 YoE building scalable web applications using <span className='highlight'>React.js</span> for dynamic user interfaces and <span className='highlight'>Golang (Gin framework)</span> for performant backend APIs. Familiar with messaging architectures and real-time communication through <span className='highlight'>Firebase Cloud Messaging (FCM)</span>. Strong foundation in JavaScript with <span className='highlight'>Tailwind CSS</span>, <span className='highlight'>RESTful APIs</span>, and component-based UI design, with an eagerness to learn and adapt to new technologies. Passionate about clean code, performance optimization, and delivering solutions that enhance user experience and business outcomes.</p>
    </div>
  )
}

export default Summary
