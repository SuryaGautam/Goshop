import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offer from "../components/Offer";
import NewCollections from "../components/NewCollections";
import NewsLetters from "../components/NewsLetters";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetters />
    </>
  );
};

export default Home;
