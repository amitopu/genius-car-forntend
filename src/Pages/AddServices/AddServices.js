import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addservice", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="w-50 mx-auto">
            <h1>Please add services</h1>
            <form
                className="d-flex flex-column"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="mb-3"
                    placeholder="Name"
                    {...register("name", {
                        required: true,
                        maxLength: 30,
                    })}
                />
                <textarea
                    className="mb-3"
                    placeholder="Description"
                    {...register("description")}
                />
                <input
                    className="mb-3"
                    placeholder="Price"
                    type="number"
                    {...register("price", { min: 0, max: 999 })}
                />
                <input
                    className="mb-3"
                    placeholder="Photo URL"
                    type="text"
                    {...register("img")}
                />
                <input value="Add Service" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;
