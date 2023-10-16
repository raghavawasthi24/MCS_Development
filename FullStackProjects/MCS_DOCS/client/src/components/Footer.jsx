import React from 'react'
import Logo from "../assets/logoWhite.png"

const Footer = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-[#9400D3] to-[#0076CE] text-white'>
            <div className='flex justify-between w-[90%] mx-auto p-4'>
                <div>
                    <img src={Logo} alt="" />
                    <p>India's first platform dedicated to simplifying partner search</p>
                </div>
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
            <hr />

            <div>
                <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            </div>

        </div>
        <div className='bg-black text-white text-center py-2'>
        Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer