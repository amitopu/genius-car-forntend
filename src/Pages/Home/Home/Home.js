import React from "react";
import Title from "../../Shared/Title/Title";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Title></Title>
        </>
    );
};

export default Home;
