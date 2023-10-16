import { Button, OutlinedInput, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftImg from "../../../assets/Left.png";
import BackgroungImg from "../../../assets/bg.png";
import CuttingVector from "../../../assets/Vector.png";
import { useDispatch, useSelector } from "react-redux";
import {
  currentCAFetch,
  fetchingCAList,
  searchingCA,
} from "../../../store/slices/personSlice";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [CAname, setCAname] = useState("");
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  // const [CAList,setCAList]=useState();
  const CAList = useSelector((state) => state.person.variedCAList);
  const search = (e) => {
    console.log("ghvvhg");
    // dispatch(fetchingCAList(e.target.value))
    dispatch(searchingCA(CAname));
  };

  const getDetails = (item) => {
    dispatch(currentCAFetch(item));
    navigate("/details");
  };
  const fetchCAList = (e) => {
    dispatch(fetchingCAList(e.target.value));
    // setCAList(useSelector(state=>state.person.variedCAList))
    // console.log(CAList)
    // setCAname(e.target.value)
  };
  return (
    <div className="md:h-screen overflow-hidden flex flex-col md:flex-row">
      <div>
        <img
          src={BackgroungImg}
          className="absolute w-screen h-screen overflow-hidden top-0 -z-10"
        />
        <img
          src={CuttingVector}
          className="w-screen overflow-hidden absolute bottom-0 -z-10"
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center px-6 gap-6 lg:gap-10 mt-14 p-6">
        <p className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold leading-tight">
          Find Partners (CAs) available online
        </p>
        <p className="text-gray-500">
          <span className="font-bold">CONNECT</span> with us where your services
          are listed and visible to a myriad of businesses seeking CA’s for
          compliance support
        </p>
        <div className="w-full relative">
          <div className="flex items-center">
            <OutlinedInput
              placeholder="Search by name"
              sx={{
                width: "20rem",
                height: "3rem",
                borderRadius: "0",
                border: "none",
                outline: "0",
              }}
              onChange={fetchCAList}
            />
            <Button
              variant="contained"
              sx={{ width: "10rem", height: "3rem", borderRadius: "0" }}
              onClick={search}
            >
              Search
            </Button>
          </div>
          <div className={`${hide ? "hidden" : "absolute top-[3rem] w-full bg-white z-40"}`}>
            {CAList?.map((item) => {
              console.log(CAList);
              return (
                <p className="p-2 border-b" onClick={() => getDetails(item)}>
                  {item.name}
                </p>
              );
            })}
            {/* <p className='p-2 border-b'>{CAList[0]?.name}</p> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <img src={LeftImg} />
      </div>
    </div>
  );
};

export default LandingPage;
