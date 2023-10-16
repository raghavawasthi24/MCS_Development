import React from "react";
import Navbar from "../../components/Navbar";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button } from "@mui/material";
import DetailsImg from "../../assets/detailsImg.png";

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
  return (
    <div>
      <Navbar />
      <div className="mt-14 w-4/5 mx-auto flex gap-6">
        <div className="w-1/3 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Michael Jackson</p>
            <p>
              I am here to provide my expertise in accounting and finance, which
              includes financial statements, economics, and auditing, all to
              assist you effectively
            </p>
            <div>
              <StarIcon />
              4.8(89)
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p>Basic to complex tasks</p>
                <p>₹4,370</p>
              </div>
              <p>
                <CalendarMonthIcon />
                Delivers the job within 2 days
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
        <div className="w-2/3 flex flex-col gap-4">
          <img src={DetailsImg} className="h-[280px]" />
          <p className="font-bold text-xl">About Michael Jackson</p>
          <div className="flex justify-between">
            <div>
              <p className="text-[#999999] font-bold">FROM</p>
              <p>INDIA</p>
            </div>
            <div>
              <p className="text-[#999999] font-bold">PARTNER SINCE</p>
              <p>2011</p>
            </div>
            <div>
              <p className="text-[#999999] font-bold">AVERAGE RESPONSE TIME</p>
              <p>30 minutes</p>
            </div>
          </div>
          <div>
            <p className="text-[#999999] font-bold">ABOUT</p>
            <p>
              I am a Professional Charted Accountant here to offer professional
              services of accounting and finance, financial statements,
              Bookkeeping in affordable price.
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[#999999] font-bold">SERVICES I OFFER</p>
              <ul>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
              </ul>
            </div>
            <div>
              <p className="text-[#999999] font-bold">WHY ME?</p>
              <ul>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
                <li>Financial accounting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <p className="font-bold text-[2rem] my-10">Recommended for you</p>
        <div className="grid grid-cols-3">
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
