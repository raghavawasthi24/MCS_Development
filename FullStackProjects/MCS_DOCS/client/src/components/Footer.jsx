import React from 'react'
import Logo from "../assets/logoWhite.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-[#9400D3] to-[#0076CE] text-white'>
            <div className='flex justify-between w-[90%] mx-auto p-4 gap-4 md:flex-row flex-col '>
                <div>
                    <img src={Logo} alt="" />
                    <p>India's first platform dedicated to simplifying partner search</p>
                </div>
                <div className=' flex  md:justify-between gap-6 lg:gap-10 flex-wrap md:flex-nowrap'>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold'>COMPANY</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Careers</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold'>SOLUTIONS</li>
                        <li>Search</li>
                        <li>Connect</li>
                        <li>Research</li>
                        <li>Academy</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold'>RESOURCES</li>
                        <li>Blogs</li>
                        <li>Forms</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold'>SUPPORT</li>
                        <li>Help</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold'>LEGAL</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
            </div>
            <hr />

            <div className='flex flex-col sm:flex-row gap-4 justify-between w-[90%] mx-auto p-4'>
                <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
                <div className='flex gap-4'>
                    <FacebookIcon/>
                     <InstagramIcon/>
                       <LinkedInIcon/>
                       <WhatsAppIcon/>
                       
                </div>
            </div>

        </div>
        <div className='bg-black text-white text-center p-2 text-sm'>
        Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer