import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
   selectCurrentTab,
   selectNumRow,
   setCurrentTab,
   setNumRow,
} from "../redux/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import PropertyCard from "./PropertyCard";
import { useEffect, useState } from "react";
import jsonData from "../data.json";
import { v4 as uuid } from "uuid";

const Home = () => {
   const currentTab = useSelector(selectCurrentTab);
   const numRow = useSelector(selectNumRow);

   const dispatch = useDispatch();

   const [property, setProperty] = useState([]);

   useEffect(() => {
      if (numRow > 2) {
         return;
      }

      let data = jsonData[currentTab];

      let tempData = [];

      for (let i = 0; i < numRow * 3; i++) {
         if (data[i]) {
            tempData.push(data[i]);
         }
      }

      setProperty(tempData);
   }, [numRow, currentTab]);

   return (
      <div className="flex flex-col items-center space-y-8 py-5 px-44">
         <div className="w-[30rem] space-y-5">
            <h1 className="text-4xl text-center font-bold">
               Featured Listed Property
            </h1>
            <p className="text-center">
               Real estate can be bought, sold, leased, or rented, and can be a
               valuable investment opportunity. The value of real estate can
               be...
            </p>
         </div>
         <div className="flex items-center justify-between w-full">
            <div className="space-x-4 font-semibold">
               <button
                  onClick={() => {
                     dispatch(setCurrentTab("ny"));
                     dispatch(setNumRow(1));
                  }}
                  className={`${
                     currentTab == "ny"
                        ? "bg-[#373ae3] text-white"
                        : "bg-[#ebecfb]"
                  }  px-4 py-2 rounded-[50px]`}
               >
                  New York
               </button>
               <button
                  onClick={() => {
                     dispatch(setCurrentTab("mu"));
                     dispatch(setNumRow(1));
                  }}
                  className={`${
                     currentTab == "mu"
                        ? "bg-[#373ae3] text-white"
                        : "bg-[#ebecfb]"
                  }  px-4 py-2 rounded-[50px]`}
               >
                  Mumbai
               </button>
               <button
                  onClick={() => {
                     dispatch(setCurrentTab("pa"));
                     dispatch(setNumRow(1));
                  }}
                  className={`${
                     currentTab == "pa"
                        ? "bg-[#373ae3] text-white"
                        : "bg-[#ebecfb]"
                  }  px-4 py-2 rounded-[50px]`}
               >
                  Paris
               </button>
               <button
                  onClick={() => {
                     dispatch(setCurrentTab("ld"));
                     dispatch(setNumRow(1));
                  }}
                  className={`${
                     currentTab == "ld"
                        ? "bg-[#373ae3] text-white"
                        : "bg-[#ebecfb]"
                  }  px-4 py-2 rounded-[50px]`}
               >
                  London
               </button>
            </div>
            <div className="text-[#373ae3] hover:text-white font-bold">
               <button className="bg-[#f5f5fd] hover:bg-[#373ae3] transition-all border border-[#373ae3] px-4 py-2 rounded-[50px]  flex items-center">
                  View All
                  <ArrowRightAltIcon />
               </button>
            </div>
         </div>
         {property && property.length !== 0 ? (
            <>
               <div className="grid grid-cols-3 gap-10">
                  {property.map((p) => (
                     <PropertyCard key={uuid()} data={p} id={uuid()} />
                  ))}
               </div>
               <div className="text-white !mt-5">
                  <button
                     onClick={() => dispatch(setNumRow(numRow + 1))}
                     className="bg-[#373ae3] transition-all border border-[#373ae3] px-4 py-2 rounded-[50px] flex items-center hover:bg-[#3033c8]"
                  >
                     <HourglassTopIcon className="!text-[20px] mr-1" />
                     Show More
                  </button>
               </div>
            </>
         ) : (
            <>
               <div className="flex justify-center items-center pt-44">
                  <h1 className="text-4xl">
                     Sorry, no property is available at this moment.
                  </h1>
               </div>
            </>
         )}
      </div>
   );
};

export default Home;
