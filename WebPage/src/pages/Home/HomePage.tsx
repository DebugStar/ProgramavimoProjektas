import React, { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import RightPanel from "../../components/layout/RightPanel/RightPanel";
import { TopNav } from "../../components/layout/TopNav/TopNav";
import Footer from "../../components/layout/Footer/Footer";

const sidebarItems = [
    { id: "inbox", label: "Inbox" },
    { id: "saved", label: "Saved" },
    { id: "settings", label: "Settings" }
];

const HomePage: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <PageLayout
            header={
                <Header
                    title="Main Page"
                    onToggleSidebar={() => setSidebarOpen(prev => !prev)}
                />
            }
            topNav={<TopNav />}
            sidebar={<Sidebar items={sidebarItems} />}
            rightPanel={
                <RightPanel title="Sources">
                    <ul>
                        <li><a href="#source-1">Document 1</a></li>
                        <li><a href="#source-2">Document 2</a></li>
                    </ul>
                </RightPanel>
            }
            footer={<Footer />}
            mainToolbar={
                <div style={{ display: "flex", gap: 8 }}>
                    <button type="button">New</button>
                    <button type="button">Refresh</button>
                </div>
            }
            sidebarOpen={sidebarOpen}
            showRightPanel={true}
        >
            {/* Main content */}
            <section aria-label="Primary content">
                <h1 style={{ fontSize: "1.25rem" }}>Welcome</h1>
                <p>Replace this with your main content (chat area, list, form, etc.).</p>
            </section>
        </PageLayout>
    );
};

export default HomePage;