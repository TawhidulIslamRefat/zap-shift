import React from "react";
import image1 from '../../../assets/service.png'
const Services = () => {
  return (
    <div className="bg-[#03373D] p-25 rounded-4xl">
      <h1 className="text-white text-4xl font-extrabold text-center">
        Our Services
      </h1>
      <p className="text-[16px] font-medium text-[#DADADA] text-center max-w-3xl mx-auto mt-3">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center hover:bg-primary transform transition-all duration-500 hover:scale-105">
          <img src={image1} alt="" />
          <h3 className="text-2xl font-bold text-[#03373D] mt-4 mb-3">
            Express  & Standard Delivery
          </h3>
          <p className="text-[16px] font-medium text-[#606060] text-center max-w-sm">
           We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center hover:bg-primary transform transition-all duration-500 hover:scale-105">
          <img src={image1} alt="" />
          <h3 className="text-2xl font-bold text-[#03373D] mt-4 mb-3">
           Nationwide Delivery
          </h3>
          <p className="text-[16px] font-medium text-[#606060] text-center max-w-sm">
           We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center hover:bg-primary transform transition-all duration-500 hover:scale-105">
          <img src={image1} alt="" />
          <h3 className="text-2xl font-bold text-[#03373D] mt-4 mb-3">
            Fulfillment Solution
          </h3>
          <p className="text-[16px] font-medium text-[#606060] text-center max-w-sm">
          We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center hover:bg-primary transform transition-all duration-500 hover:scale-105">
          <img src={image1} alt="" />
          <h3 className="text-2xl font-bold text-[#03373D] mt-4 mb-3">
            Cash on Home Delivery
          </h3>
          <p className="text-[16px] font-medium text-[#606060] text-center max-w-sm">
           100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center hover:bg-primary transform transition-all duration-500 hover:scale-105">
          <img src={image1} alt="" />
          <h3 className="text-2xl font-bold text-[#03373D] mt-4 mb-3 text-center">
           Corporate Service / Contract In Logistics
          </h3>
          <p className="text-[16px] font-medium text-[#606060] text-center max-w-sm">
           Customized corporate services which includes warehouse and inventory management support.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl flex flex-col items-center hover:bg-primary transform transition-all duration-500 hover:scale-105">
          <img src={image1} alt="" />
          <h3 className="text-2xl font-bold text-[#03373D] mt-4 mb-3">
            Parcel Return
          </h3>
          <p className="text-[16px] font-medium text-[#606060] text-center max-w-sm">
           Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
