import React from "react";

const Footer: React.FC = () => {
    return (
        <div>
            <small>© {new Date().getFullYear()} Example App</small>
        </div>
    );
};

export default Footer;