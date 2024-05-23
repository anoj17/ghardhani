import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import DirectionAwareHover from '../components/ui/direction-aware-hover'

const ListingItem = ({ listing }) => {
  return (
    <DirectionAwareHover imageUrl={listing.imageUrls[0] || "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"} className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px] h-[500px] sm:h-[400px] mb-5 mx-auto">
      <div className="flex flex-col">
            <div className="p-4">
            <Link to={`/listing/${listing._id}`} className="block">
              {/* <img
                src={
                  listing.imageUrls[0] ||
                  "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
                }
                alt="listing cover"
                className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
              /> */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white truncate">
                  {listing.name}
                </h2>
                <div className="flex items-center text-white text-sm mb-2">
                  <MdLocationOn className="h-4 w-4 text-white" />
                  <p className="truncate ml-1">{listing.address}</p>
                </div>
                <p className="text-white text-sm line-clamp-2 mb-4">
                  {listing.description}
                </p>
                <p className="text-white font-semibold ">
                  Rs
                  {listing.offer
                    ? listing.discountPrice.toLocaleString("en-US")
                    : listing.regularPrice.toLocaleString("en-US")}
                  {listing.type === "rent" && " / month"}
                </p>
                <div className="flex text-white gap-4 text-xs">
                  <div>
                    {listing.bedrooms} {listing.bedrooms > 1 ? "beds" : "bed"}
                  </div>
                  <div>
                    {listing.bathrooms} {listing.bathrooms > 1 ? "baths" : "bath"}
                  </div>
                </div>
              </div>
            </Link>
            </div>
            <div className="p-4">
              <Link to={`/room/${listing._id}`} className="text-white hover:underline">
                More Details
              </Link>
            </div>
      </div>
    </DirectionAwareHover>
  );
};

export default ListingItem;
