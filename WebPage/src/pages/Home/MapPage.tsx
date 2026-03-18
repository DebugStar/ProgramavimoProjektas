import PageLayout from "../../components/layout/PageLayout/PageLayout";
import Header from "../../components/layout/Header/Header";
import { TopNav } from "../../components/layout/TopNav/TopNav";
import RightPanel from "../../components/layout/RightPanel/RightPanel";
import Footer from "../../components/layout/Footer/Footer";
import Map from "../../components/map/Map";
import logoSrc from "../../assets/logo.png";

export interface MapPageProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function MapPage({ theme, onToggleTheme }: MapPageProps) {
  return (
    <PageLayout
      header={
        <Header
          logo={{ src: logoSrc, alt: "askKTU logo" }}
          onToggleTheme={onToggleTheme}
          theme={theme}
        />
      }
      topNav={<TopNav />}
      rightMain={
        <>
          <Map />
          <RightPanel />
        </>
      }
      footer={<Footer />}
    />
  );
}