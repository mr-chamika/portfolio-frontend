import { useState } from 'react'
import git from '../assets/Post/github.png'
import fb from '../assets/Post/fb.png'
import linkedin from '../assets/Post/linkedin.png'

import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router'

const Contact = () => {

    const goto = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault()

        if (name.trim().length == 0 || msg.trim().length == 0) {

            if (name.trim().length == 0 && msg.trim().length == 0) {

                alert('Full name and msg can not be empty')

            } else if (name.trim().length == 0) {

                alert('Full name can not be empty')

            } else if (msg.trim().length == 0) {

                alert('Message can not be empty')

            }

        } else {

            var emailTemplate = {

                to_name: 'Hasith',
                message: msg,
                from_name: name,
                email: email,
                mobile: contact,
                to_email: 'hasithchamika2001@gmail.com'

            }

            emailjs.send('service_i1aiqin', 'template_q9u99ms', emailTemplate, 'Yec_iAk1ts2gSV3gU')

            alert('Email successfully sent')
            goto('/home')

        }

    }

    return (

        <div class='w-full items-center flex sm:flex-row flex-col sm:h-[90%] h-[50%] sm:mt-10 pt-15'>
            <title>Contact Me</title>
            <div class='sm:w-[50%] w-full flex justify-start items-center sm:py-10 py-5 pl-5 sm:pl-30 sm:border-r-6 border-gray-300'>

                <form class='flex flex-col gap-10 sm:gap-5 w-[100%] items-center sm:items-start' onSubmit={handleSubmit}>

                    <input class='text-[17px] bg-blue-100 pl-3 w-[80%] py-3 rounded-2xl outline-amber-100 font-[Montserrat]' placeholder="Full Name" type='text' value={name} onChange={e => setName(e.target.value)}></input>
                    <input class='text-[17px] bg-blue-100 pl-3 w-[80%] py-3 rounded-2xl outline-amber-100 font-[Montserrat]' placeholder="Email Address" type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input class='text-[17px] bg-blue-100 pl-3 w-[80%] py-3 rounded-2xl outline-amber-100 font-[Montserrat]' placeholder="07xxxxxxxx (mobile)" value={contact} onChange={e => setContact(e.target.value)} type='tel' pattern='07[0-9]{8}'></input>
                    <textarea class='w-[80%] resize-none text-[17px] bg-blue-100 px-3 py-3 rounded-2xl h-[200px] outline-amber-100 font-[Montserrat]' placeholder="Message" type='text' value={msg} onChange={e => setMsg(e.target.value)} maxLength={400}></textarea>

                    <input value='Send Email' type="submit" class='w-[80%] hover:cursor-pointer mt-10 hover:shadow-[1px_1px_9px] rounded-md bg-green-300 hover: shadow-green-400 py-1 transition delay-150 ease-in' />
                </form>

            </div>

            <div class='sm:w-[50%] w-[50%] flex flex-col justify-center items-center '>

                <h1 class='sm:text-8xl text-4xl mb-40 text-black sm:block hidden'>Contact Me</h1>
                <div class='sm:hidden inline-flex items-center w-full mt-5 mb-3'>

                    <hr class='border-gray-300 flex-grow border-t-1' />
                    <span class='px-2 text-gray-400'>or</span>
                    <hr class='border-gray-300 flex-grow border-t-1' />


                </div>
                <ul class='flex justify-center p-3 sm:gap-10 sm:border-t-1 border-gray-200 sm:p-7'>
                    <li><a href='https://web.facebook.com/last.hista'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={fb} /></a></li>
                    <li><a href='https://www.linkedin.com/in/hasith-wijesinghe-3394062a2'><img class='w-13 hover:inset-shadow-sm hover:inset-shadow-gray-400 rounded-[100%] hover: p-1 transition delay-200 ease-in' src={linkedin} /></a></li>
                </ul>

            </div>

        </div>

    );

}

export default Contact;