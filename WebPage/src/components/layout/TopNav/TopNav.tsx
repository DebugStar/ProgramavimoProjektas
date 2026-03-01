import React from "react";

export const TopNav: React.FC = () => {
    return (
        <nav aria-label="Primary">
            <ul style={{ display: "flex", gap: 16, listStyle: "none", padding: 0, margin: 0 }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#docs">Docs</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    );
};