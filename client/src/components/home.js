import React from 'react';
import FirstRow from "./firstRow";
import SecondRow from "./secondRow";
import '../index.css';
import '../App.css';

    function Home() {
        return (
            <div>
                <FirstRow />
                <SecondRow />
            </div>
        );
    }

export default Home;