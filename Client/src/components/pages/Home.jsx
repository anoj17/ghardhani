import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../ListingItem";
import Footer from "./Footer";
import RecommendedRoom from "./RecommendedRoom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import { useSelector } from "react-redux";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  SwiperCore.use([Navigation]);
  // console.log(offerListings)

const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/v1/getallroom");
        const data = await res.json();
        setOfferListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="bg-gray-200">

      {/* Top Section */}
      <div className="flex flex-col gap-6 p-6 md:p-20 max-w-6xl mx-auto text-center  ">
         <h1 className="text-4xl md:text-6xl font-bold text-slate-700">
          GharDani
           <span className="text-green-500"> Your Choice</span>
           
          <br />
          Don't forget to use Ghardhani
        </h1> 
         <Link
          to={`${currentUser ? "/search" : '/login'}`}
          className="text-xs sm:text-lg text-blue-800 font-bold hover:underline"
        > <Button
        borderRadius="1.75rem"
        className="bg-green-500 hover:bg-green-600 dark:bg-slate-900 text-[1rem] text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
          search
      </Button>
        </Link>
       
      </div>

      {/* Listing Results Section */}
      <div className="mb-5">
        {offerListings.length > 0 && (
          <div>
            <div className="my-3 md:px-10 px-6 lg:px-16">
              <h2 className="text-3xl font-semibold text-black">
                Our rooms
              </h2>
              <Link
                to="/search?offer=true"
                className="text-lg text-blue-800 hover:underline flex items-center gap-3 underline-offset-4"
              >
                Search more here <FaAngleDoubleRight />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 px-6 md:px-10 lg:px-16">
              {offerListings && offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )} 
      </div>
      <RecommendedRoom />
      <Footer />
    </div>
  );
}


/**
 * 
 * import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import { Link } from "react-router-dom";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        badge={
          <Link to="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}

// Peerlist logo
const Badge = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};

 */