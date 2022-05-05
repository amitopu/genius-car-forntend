import React from "react";
import sleeping from "../../../images/sleeping.jpg";
import Title from "../../Shared/Title/Title";

const NotFound = () => {
    return (
        <div>
            <Title></Title>
            <h2 className="text-primary text-center">Mechanic is sleeping</h2>
            <img className="w-100" src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;
