import React, {type PropsWithChildren } from "react";
import styles from "./PageLayout.module.css";

export type PageLayoutProps = PropsWithChildren<{
    /** Controls whether the left sidebar is visible (collapsible) */
    sidebarOpen?: boolean;
    /** Controls whether to render the optional right panel */
    showRightPanel?: boolean;
    /** Optional top navigation items */
    topNav?: React.ReactNode;
    /** Right panel content (sources, details, etc.) */
    rightPanel?: React.ReactNode;
    /** Footer (optional) */
    footer?: React.ReactNode;
    /** Header content (logo + title) */
    header: React.ReactNode;
    /** Sidebar content (navigation, filters, chat history) */
    sidebar?: React.ReactNode;
    /** Main toolbar (optional controls above main content) */
    mainToolbar?: React.ReactNode;
}>;

export const PageLayout: React.FC<PageLayoutProps> = ({
                                                          header,
                                                          topNav,
                                                          sidebar,
                                                          rightPanel,
                                                          footer,
                                                          mainToolbar,
                                                          sidebarOpen = true,
                                                          showRightPanel = true,
                                                          children
                                                      }) => {
    return (
        <div className={styles.root}>
            {/* Landmark: header */}
            <header className={styles.header} role="banner" aria-label="Application header">
                {header}
            </header>

            {/* Landmark: navigation (top link bar) */}
            {topNav && (
                <nav className={styles.topnav} aria-label="Primary">
                    {topNav}
                </nav>
            )}

            {/* Landmark: complementary (left sidebar) */}
            {sidebar && (
                <aside
                    className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
                    aria-label="Sidebar"
                >
                    {sidebar}
                </aside>
            )}

            {/* Landmark: main */}
            <main id="main" className={styles.main} role="main" aria-label="Main content">
                {mainToolbar && (
                    <div className={styles.mainToolbar} aria-label="Main toolbar">
                        {mainToolbar}
                    </div>
                )}
                <div className={styles.mainBody}>
                    {children}
                </div>
            </main>

            {/* Landmark: complementary (right info panel) */}
            {showRightPanel && rightPanel && (
                <aside className={styles.right} aria-label="Right panel">
                    {rightPanel}
                </aside>
            )}

            {/* Landmark: contentinfo (footer) */}
            {footer && (
                <footer className={styles.footer} role="contentinfo" aria-label="Footer">
                    {footer}
                </footer>
            )}
        </div>
    );
};