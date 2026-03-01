import React from "react";

export interface HeaderProps {
    title?: string;
    onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title = "App", onToggleSidebar }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
                type="button"
                aria-label="Toggle sidebar"
                onClick={onToggleSidebar}
            >
                ☰
            </button>
            <strong>{title}</strong>
        </div>
    );
};

export default Header;