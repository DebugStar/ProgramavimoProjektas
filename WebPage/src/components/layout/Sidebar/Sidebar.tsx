import React from "react";

export interface SidebarProps {
    items?: { id: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items = [] }) => {
    return (
        <nav aria-label="Sidebar navigation">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {items.map(i => (
                    <li key={i.id}>
                        <a href={`#${i.id}`}>{i.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;