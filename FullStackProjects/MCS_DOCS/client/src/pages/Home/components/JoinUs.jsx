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
            id:"2",
            heading:"Auditor Appointment",
            tagline:"Company informs new auditor and submits ADT.1 form to ROC.",
            days:"Within 30 days  ",
            penalities:[
                "₹300 per month."
            ]
        },
        {
            id:"3",
            heading:"DIN eKYC",
            tagline:"Directors share personal information for identification & verification  ",
            days:"Every Year",
            penalities:[
                "₹5000 one time"
            ]
        },{
            id:"4",
            heading:"DPT-3",
            tagline:"Companies report money taken from people to ROC; auditors confirm details.",
            days:"Within 180 days ",
            penalities:[
                "₹50,000 for the company","₹1,000 /day for directors"
            ]
        },{
            id:"5",
            heading:"MCA Form AOC-4",
            tagline:"It's like an official report card for a company's documents",
            days:"Within 180 days ",
            penalities:[
                "On or Before 30th November ","₹200 per day (No upper limit)*"
            ]
        },
        {
            id:"6",
            heading:"Commencement of business ",
            tagline:"Invested shareholders must confirm payment and office address ",
            days:"Within 180 days ",
            penalities:[
                "On or Before 31st December","₹200 per day(No upper limit)* "
            ]
        }
    ]
  return (
    <div className='flex flex-col items-center relative mt-10'>
        <img src={AboutBg} className='absolute top-0 w-full h-full -z-10'/>
        <p className='text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold'>Want to Join Us?</p>
        <p className='text-center'>To remain with us, it is essential that you diligently follow the steps provided</p>
        <div className="flex flex-wrap w-[95%] mx-auto my-10">
            {
                outline.map((items,key)=>{
                    return(
                        <div className='w-[380px] h-[280px] mx-auto my-4  relative p-2' key={key}>
                        <div className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] w-[30px] h-[30px] rounded-md text-white font-bold text-center absolute top-0 left-0'>{items.id}</div>
                        <div className='h-full flex flex-col items-center gap-2 bg-white border p-4 rounded-xl shadow-lg'>
                            <p className='font-bold text-lg'>{items.heading}</p>
                            <p className='text-center'>{items.tagline}</p>
                            <div className='flex justify-between gap-4 bg-[#F4F4F4] px-4 py-1'>
                                <div>
                                    <p className='text-blue-500'>Due Date</p>
                                   <p>{items.days}</p>
                                </div>
                                <div>
                                    <p className='text-red-500'>Penalty fees</p>
                                   {
                                    items.penalities.map((val,key)=>{
                                        return(
                                            <p>{val}</p>
                                        )
                                    })
                                   }
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