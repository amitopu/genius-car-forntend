import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Title = () => {
    const location = useLocation();
    const { pathname, hash } = location;
    const makeTitle = () => {
        if (pathname && hash) {
            return pathname.slice(1) + " > " + hash.slice(1);
        } else if (pathname) {
            return pathname.slice(1);
        } else {
            return "";
        }
    };
    useEffect(() => {
        const title = makeTitle();
        document.title = `${title} - Genius Car Services`;
    }, [location]);
    return <div></div>;
};

export default Title;
