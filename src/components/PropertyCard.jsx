import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BedIcon from "@mui/icons-material/Bed";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HeightIcon from "@mui/icons-material/Height";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../redux/property/propertySlice";

const PropertyCard = ({ id, data }) => {
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(setData(data));

      navigate(`/property/${id}`);
   };

   return (
      <div
         onClick={handleClick}
         className="w-[20rem] h-[27.4rem] bg-white p-2 rounded-xl cursor-pointer"
      >
         <div className="relative">
            <img src={data?.imgSrc} className="rounded-xl h-48 w-full" />

            <div className="p-3 absolute top-0 w-full flex justify-between items-center">
               <button className="bg-white text-[#373ae3] font-semibold px-3 py-1 rounded-[50px]">
                  For Rent
               </button>
               <button className="bg-white text-[#373ae3] font-semibold p-[4px] rounded-[50px]">
                  <FavoriteBorderIcon className="!text-[20px]" />
               </button>
            </div>
            {data?.tag && (
               <div className="bg-[#373ae3] text-white absolute px-6 py-1 rounded-lg -left-2 -bottom-2">
                  <p>{data?.tag}</p>
               </div>
            )}
         </div>
         <div className="px-3">
            <div className="pt-3 space-y-2">
               <p className="flex items-center">
                  <LocationOnOutlinedIcon className="!text-[20px] text-[#c6b594]" />{" "}
                  {data?.name}
               </p>
               <h1 className="text-lg h-12 font-semibold">{data?.address}</h1>
            </div>
            <div className="pt-3 flex items-center justify-between text-[#414e68]">
               <div className="flex flex-col justify-center items-center space-y-1">
                  <ApartmentIcon />
                  <p>{data?.rooms} room</p>
               </div>
               <div className="flex flex-col justify-center items-center space-y-1">
                  <BedIcon />
                  <p>{data?.bed} bed</p>
               </div>
               <div className="flex flex-col justify-center items-center space-y-1">
                  <BathtubIcon />
                  <p>{data?.bath} Bath</p>
               </div>
               <div className="flex flex-col justify-center items-center space-y-1">
                  <HeightIcon />
                  <p>{data?.size} sft</p>
               </div>
            </div>
            <hr className="border border-dashed mt-2" />
            <div className="flex justify-between items-center pt-3">
               <h1 className="font-bold">
                  <span className="text-[#373ae3] text-lg">${data?.price}</span>{" "}
                  / month
               </h1>
               <button className="text-[#373ae3] font-bold border border-[#373ae3] rounded-[50px] px-4 py-2 hover:bg-[#373ae3] hover:text-white transition-all">
                  Read More
               </button>
            </div>
         </div>
      </div>
   );
};

PropertyCard.propTypes = {
   id: PropTypes.string,
   data: PropTypes.object,
};

export default PropertyCard;
