import React from 'react';
import StartForm from "./StartForm";
import WinLossModal from "./WinLossModal";
import Header from "./Header";
import CellContainer from "./CellContainer";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <StartForm/>
            <WinLossModal/>
            <Header/>
            <CellContainer/>
            <Footer/>
        </div>
    );
};

export default Home;