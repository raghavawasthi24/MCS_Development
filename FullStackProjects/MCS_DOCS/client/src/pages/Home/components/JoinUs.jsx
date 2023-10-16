import React from 'react';
import AboutBg from "../../../assets/joinBg.png";

const JoinUs = () => {
    const outline=[
        {
            id:"1",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        },
        {
            id:"1",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        },
        {
            id:"1",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        },{
            id:"1",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        },{
            id:"1",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        },
        {
            id:"1",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        }
    ]
  return (
    <div className='flex flex-col items-center relative'>
        <img src={AboutBg} className='absolute top-0 w-full h-full -z-10'/>
        <p className='text-[3rem] font-bold'>Want to Join Us?</p>
        <p>To remain with us, it is essential that you diligently follow the steps provided</p>
        <div className=" grid grid-cols-3 w-[80%] mx-auto my-4">
            {
                outline.map((items,key)=>{
                    return(
                        <div className='w-[300px] border px-4 py-2 rounded-xl shadow-lg mx-auto my-4 bg-white'>
                        <div>1</div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <p className='font-bold text-lg'>Commencement of business </p>
                            <p className='text-center'>Invested shareholders must confirm payment and office address </p>
                            <div className='flex justify-between gap-4 bg-[#F4F4F4] px-4 py-1'>
                                <div>
                                    <p className='text-blue-500'>Due Date</p>
                                   <p>Within 180 days</p>
                                </div>
                                <div>
                                    <p className='text-red-500'>Penalty fees</p>
                                    <p>₹50,000 for the company</p>
                                    <p>₹1,000 /day for directors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default JoinUs