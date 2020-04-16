import React from "react";


function SecondRow () {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-5">
                    <h3 className="healthTip">Health Tip of the Day!</h3>
                    <div className="card">
                        <div className="content">
                            <p className="tipCall">BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH</p>
                        </div>
                    </div>
                </div>
                <div className="col col-md">
                        <div className="content">
                        </div>
                </div>
                <div className="col col-md-5">
                    <div className="card">
                        <div className="content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondRow;