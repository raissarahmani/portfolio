import Home from '../assets/home.svg'
import Contact from '../assets/contact.svg'

function Header() {
  return (
    <div className='flex flex-row header gap-5'>
      <div className='flex flex-row gap-1 items-center'>
        <img src={Home} alt="Home" className='w-[20px] h-[20px]' />
        <button className='nav'>Home</button>
      </div>
      <div className='flex flex-row gap-1 items-center'>
        <img src={Contact} alt="Contact Me" className='w-[25px] h-[25px]' />
        <button className='nav'>Contact</button>
      </div>
    </div>
  )
}

export default Header
