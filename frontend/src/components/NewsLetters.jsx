import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const NewsLetters = () => {
  const { subscribe } = useContext(ShopContext);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      subscribe(email)
        .then(() => {
          setEmail("");
        })
        .catch((err) => {
          alert("Subscription failed. Please try again.")
        });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="h3">Get Exclusive offers on Your Email</h3>
        <h4 className="uppercase bold-18">
          Subscribe to our newsletter and stay updated
        </h4>
        <div className="flexBetween rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 bg-primary w-full max-w-[588px]">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent ml-7 border-none outline-none regular-16"
          />
          <button className="btn_dark_rounded" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetters;
