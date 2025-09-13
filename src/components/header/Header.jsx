import { useState, useEffect } from "react";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import image1 from "../../assets/images/don-removebg.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

// Sticky header container with a blurry background
const HeaderFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(10px); /* Blur effect */
  z-index: 9999; /* Header stays on top */
  transition: all 0.3s ease-in-out; /* Smooth transition */
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  padding: 0.5rem 1.5rem;
  gap: 1rem;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Shadow effect */
  border-radius: 50px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

// Hamburger menu toggle button
const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Navigation menu
const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 70%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black for the blur effect */
  backdrop-filter: blur(15px); /* Apply the blur effect */
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.5); /* Add shadow for depth */
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
  z-index: 999;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1.8rem; /* Large font size for better visibility */
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      transition: color 0.3s ease, transform 0.3s ease;

      &:hover {
        color: #87ceeb; /* Subtle light-blue hover effect */
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;



const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #87ceeb;
  }
`;




const MainHeader = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
`;
const notify = () => toast("🌙 Dark mode coming soon — stay tuned!");
const Header = ({ isMobileView, onNavigate, sectionRefs }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <MainHeader>
      <HeaderFixed scrolling={scrolling}>
        <HeaderContent>
          {/* Profile */}
          <ProfileWrapper>
            <Img src={image1} alt="Profile" />
            <UserName>Gadri Mohamed</UserName>
          </ProfileWrapper>
          {/* Hamburger Menu for Mobile */}
          {
            <Hamburger onClick={toggleMenu}>
              {menuOpen ? <CloseButton><FiX color="#ffffff" /></CloseButton> : <FiMenu color="#ffffff" />}
            </Hamburger>
          }
          {/* Navigation Links */}
          {isMobileView && <NavMenu isOpen={menuOpen}>
            <li onClick={() => onNavigate(sectionRefs.aboutRef)}>About</li>
            <li onClick={() => onNavigate(sectionRefs.resumeRef)}>Resume</li>
            <li onClick={() => onNavigate(sectionRefs.portfolioRef)}>Portfolio</li>
            <li onClick={() => onNavigate(sectionRefs.contactRef)}>Contact</li>
          </NavMenu>}

          {/* Dark Mode Icon */}
          <IconWrapper onClick={notify} title="Dark Mode Toggle">
            <MdDarkMode color="#ffffff" size="24px" />
          </IconWrapper>
        </HeaderContent>
      </HeaderFixed>
    </MainHeader>
  );
};

export default Header;
