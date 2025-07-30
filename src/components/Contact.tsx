import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceID = 'service_3fa7zyj'
    const sendFormID = 'template_1cyc9g9'
    const autoReplyID = 'template_jz1kwam'
    const publicKey = 'VlJLU6O3yPq7tFQes'

    emailjs.sendForm(serviceID, sendFormID, formRef.current, publicKey)
    emailjs.sendForm(serviceID, autoReplyID, formRef.current, publicKey)
      .then(
        (result) => {
          console.log('Success:', result.text);
          formRef.current?.reset();
        },
        (error) => {
          console.log('Failed:', error.text);
        }
      );
  };

  return (
    <div className='mx-15 my-10 px-15 py-10 summary'>
        <div className='text-5xl text-center py-3'>Contact Me!</div>
        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-2 w-full py-2'>
            <input type="email" name="email" placeholder='Your email' required className='input'/>
            <input type="text" name="subject" placeholder='Subject' required className='input'/>
            <textarea name="message" placeholder='What do you want to tell me?' className='input'></textarea>
            <button type='submit' className='button'>Send Email</button>
        </form>
    </div>
  )
}

export default Contact
