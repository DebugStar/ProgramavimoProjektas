import PageLayoutDocs from "../../components/layout/PageLayout/PageLayoutDocs";
import Header from "../../components/layout/Header/Header";
import { TopNav } from "../../components/layout/TopNav/TopNav";
import Footer from "../../components/layout/Footer/Footer";
import logoSrc from "../../assets/logo.png";
import ChatStats from "../../components/Document/ChatStats";

export default function StatsPage() {
    return (
        <PageLayoutDocs
            header={<Header logo={{ src: logoSrc, alt: "askKTU logo" }} />}
            topNav={<TopNav />}
            rightMain={
                <section className="document-container">
                    <h1>Chatbot Statistics</h1>
                    <p>Live usage data from the question log.</p>
                    <ChatStats />
                </section>
            }
            footer={<Footer />}
        />
    );
}
