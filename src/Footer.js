import React from "react";


let date = new Date()
const Footer =()=>{


    return(
        <footer className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <h4> Team MemberAllocation App {date.getFullYear()}</h4>
                </div>
            </div>
        </footer>
    )
};
export default Footer