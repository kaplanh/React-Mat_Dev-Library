import React from "react";
import Header from "../../components/header/Header";

import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import homeImg from "../../assets/books.jpg";


const Home = () => {
    return (
        <HomeContainer>
            <Header />

            <CardContainer wrap="wrap"></CardContainer>

            <HomeImage>
                <img src={homeImg} alt="Home" />
            </HomeImage>
        </HomeContainer>
    );
};

export default Home;
