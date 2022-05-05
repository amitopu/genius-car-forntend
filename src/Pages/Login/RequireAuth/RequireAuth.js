import React from "react";
import { ToastContainer, toast } from "react-toastify";
import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // console.log(user);

    if (!user.emailVerified && user.providerData[0].providerId === "password") {
        return (
            <div>
                <h2>Your email is not verified</h2>
                <h2>Please verify your email account</h2>
                <ToastContainer />
                <br />
                <button
                    onClick={async () => {
                        await sendEmailVerification(auth);
                        toast("Sending");
                    }}
                >
                    Verify Email
                </button>
            </div>
        );
    }

    return children;
};

export default RequireAuth;
