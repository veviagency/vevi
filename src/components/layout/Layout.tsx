import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
  hideNavLinks?: boolean;
  disableLogoLink?: boolean;
}

const Layout = ({ children, hideNavbar = false, hideFooter = false, hideNavLinks = false, disableLogoLink = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbar && <Navbar hideNavLinks={hideNavLinks} disableLogoLink={disableLogoLink} />}
      <main className={`flex-1 ${!hideNavbar ? "pt-16 md:pt-20" : ""}`}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
