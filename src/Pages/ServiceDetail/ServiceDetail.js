import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div>
            <h2 className="text-center">Welcome to detail: {serviceId}</h2>
            <div className="">
                <img className="mx-auto d-block" src={service.img} alt="" />
            </div>
            <h1 className="text-center">Service Name: {service.name}</h1>
            <h3 className="text-center">Price: {service.price}$</h3>
            <p className="text-center w-50 mx-auto">{service.description}</p>
            <div className="text-center">
                <Link to="/checkout">
                    <button className="btn btn-primary">
                        Proceed Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
