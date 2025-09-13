import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBare from "../components/sidebare/SideBare";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Resume from "../components/resume/Resume";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";

const AppLayouts = styled.div`
    max-width: 80rem;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
    @media (max-width:450px){
        padding: 0 !important;
        margin: 0   !important;

  }

    /* For screens up to 1024px, stack layout vertically */
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0 2rem;
    }

    /* For screens between 1024px and 1250px */
    @media (min-width: 1024px) and (max-width: 1250px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

    /* For screens below 1250px */
    @media (max-width: 1250px) {
        flex-direction: column;
        width: 100%;
        margin-top: 2rem;
        
    }
    `;

const Main = styled.main`
    @media (min-width: 1250px) {
        max-width: 1200px;
        margin-inline: auto;
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 25px;
        width: 100%;
        margin-left: 36rem;
    }

    @media (min-width: 580px) {
        margin-top: 70px;
        margin-bottom: 100px;
    }
    `;

const MainContent = styled.div`
    @media (min-width: 1250px) {
        min-width: 75%;
        width: 100%;
        margin: 0;
    }
    `;

function AppLayout() {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1250);
    // Refs for sections
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToSection = (section) => {
        section.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1250);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <Header isMobileView={isMobileView} onNavigate={scrollToSection}
                sectionRefs={{ aboutRef, resumeRef, portfolioRef, contactRef }} />
            <AppLayouts>
                <SideBare isMobileView={isMobileView} />
                <Main>
                    <MainContent>
                        {isMobileView ? (
                            // Render MobileComponent in mobile view
                            <>
                                <div ref={aboutRef}>
                                    <About />
                                </div>
                                <div ref={resumeRef}>
                                    <Resume />
                                </div>
                                <div ref={portfolioRef}>
                                    <Portfolio />
                                </div>
                                <div ref={contactRef}>
                                    <Contact />
                                </div>
                            </>
                        ) : (
                            <>
                                <Outlet />
                            </>
                        )}
                    </MainContent>
                </Main>
            </AppLayouts >
        </>
    );
}

export default AppLayout;
