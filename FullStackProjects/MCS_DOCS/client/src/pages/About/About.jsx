import React from "react";
import Navbar from "../../components/Navbar";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button } from "@mui/material";
import DetailsImg from "../../assets/detailsImg.png";
import { useSelector } from "react-redux";

const About = () => {
    const recommended=[
        {
            id:"1",
            name:"Michael Jackson",
            price:"₹4,370",
            about:"I will do business evaluation and corporate services",
            rating:"4.8",
            rated_people:"89"
        },
        {
            id:"2",
            name:"Stevie Wonder",
            price:"₹4,263",
            about:"I will do business evaluation and corporate services",
            rating:"5.0",
            rated_people:"62"
        },
        {
            id:"3",
            name:"Ray Charles",
            price:"₹2,586",
            about:"I will do business evaluation and corporate services",
            rating:"4.3",
            rated_people:"189"
        }
    ]

    const data=useSelector(state=>state.person.currentCA)
    console.log(data)
  return (
    <div>
      <Navbar />
      <div className="mt-[5rem] w-[90%] xs:w-4/5 mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[40%] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">{data.name}</p>
            <p>
              {data.intro}
            </p>
            <div className="flex items-center">
              <StarIcon sx={{color:"#0076CE"}}/>
              <span className="text-[#0076CE] font-bold">{data.rating}</span>({data.reviewCount})
            </div>
          </div>
          
            <div className="flex flex-col gap-4 bg-white p-4 shadow-lg rounded-lg">
              <div className="flex justify-between">
                <p>{data.taskComplexity}</p>
                <p>{data.price}</p>
              </div>
              <p className="flex items-center">
                <CalendarMonthIcon sx={{color:"#0076CE"}}/>
              {data.deliveryTime}
              </p>
              <div className="flex gap-4">
                <Button variant="contained" fullWidth>
                  Contained
                </Button>
                <Button variant="outlined" fullWidth>
                  Outlined
                </Button>
              </div>
            
          </div>


          <div className="border shadow-xl p-4 rounded-xl">
            <p className="font-bold text-lg">What people say?</p>
            <p>
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-[50%] flex flex-col gap-4">
          <img src={data.image} className="h-[280px] rounded-lg" />
          <p className="font-bold text-xl">About {data.name}</p>
          <div className="flex justify-between">
            <div>
              <p className="text-[#999999] font-bold text-sm">FROM</p>
              <p>{data.about.from}</p>
            </div>
            <div>
              <p className="text-[#999999] font-bold text-sm">PARTNER SINCE</p>
              <p>{data.about.partnerSince}</p>
            </div>
            <div>
              <p className="text-[#999999] font-bold text-sm">AVERAGE RESPONSE TIME</p>
              <p>{data.about.averageResponseTime}</p>
            </div>
          </div>
          <div>
            <p className="text-[#999999] font-bold text-sm">ABOUT</p>
            <p>
             {data.about.description}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[#999999] font-bold text-sm">SERVICES I OFFER</p>
              <ul className="px-6">
               {
                data.about?.services.map((item,key)=>{
                  return(
                    <li className="list-disc">{item}</li>
                  )
                })
               }
              </ul>
            </div>
            <div>
              <p className="text-[#999999] font-bold text-sm">WHY ME?</p>
              <ul className="">
                {data.about.benefits.map((item,key)=>{
                  return(
                    <li className="list-disc">{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <p className="font-bold text-[2rem] my-10">Recommended for you</p>
        <div className="flex gap-4 flex-wrap">
            {
                recommended.map((item,key)=>{
                    return(
                        <div className="w-[300px] mx-auto flex flex-col gap-2">
                        <img src={DetailsImg} alt="" />
                        <div className="flex justify-between px-2">
                          <p className="font-bold">Michael Jackson</p>
                          <p className="font-bold">₹4,370</p>
                        </div>
                        <p className="px-2">I will do business evaluation and corporate services</p>
                        <div>
                          <StarIcon />
                          4.8(89)
                        </div>
                        <Button variant="contained" fullWidth sx={{margin:"0.5rem"}}>View Services</Button>
                      </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default About;
