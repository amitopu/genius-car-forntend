import React from "react";
import useServices from "../../hooks/manageServices";

const Manage = () => {
    const [services, setServices] = useServices();

    //handle delete button
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/manage/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    const newServices = services.filter(
                        (service) => service._id !== id
                    );
                    setServices(newServices);
                }
            });
    };

    return (
        <div className="w-50 mx-auto">
            <h1>Manage services</h1>
            {services.map((service) => (
                <h4 key={service._id}>
                    {service.name}{" "}
                    <button onClick={() => handleDelete(service._id)}>X</button>
                </h4>
            ))}
        </div>
    );
};

export default Manage;
