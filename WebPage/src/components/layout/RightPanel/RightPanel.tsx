import React from "react";

export interface RightPanelProps {
    title?: string;
    children?: React.ReactNode;
}

const RightPanel: React.FC<RightPanelProps> = ({ title = "Details", children }) => {
    return (
        <section aria-labelledby="right-panel-title">
            <h2 id="right-panel-title" style={{ fontSize: "1rem", margin: "0 0 .5rem" }}>
                {title}
            </h2>
            <div>
                {children ?? <p>Right panel content placeholder.</p>}
            </div>
        </section>
    );
};

export default RightPanel;