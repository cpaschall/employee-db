import React from 'react';


const Home = () => {

    return(
        <div style={{ display:"flex", flexDirection: "column", border: "1px black solid" }}>
            <div style={{ border: "1px black solid"}}>
                <h3>Marquee</h3>
            </div>
            <div style={{ display:"flex", border: "1px black solid" }}>
                <div style={{ border: "1px black solid", width: "20%" }}>
                    <h4>Nav</h4>
                </div>
                <div style={{ border: "1px black solid", width: "80%" }}>
                    <h4>Body</h4>
                </div>
            </div>
        </div>
    )
};

export default Home;