import React from "react";
import { MdOutlineLocalOffer, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full">
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem]">
          Digital Shopping Hub Junction
        </h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">
        Explore a wide array of products across various categories, all accessible from the comfort of your home. With intuitive navigation, secure payment options, and fast delivery, it ensures a hassle-free and enjoyable shopping journey tailored to your needs.
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176K{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
          <div className="max-xs:flex-col flex gap-2">
            <NavLink to={"/womens"} className={"btn_dark_rounded flexCenter"}>
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
