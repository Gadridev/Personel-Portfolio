import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Assuming you want the latest icons
import { Link } from "react-router-dom";

const Aside = styled.aside`
 @media (max-width:450px){
        margin: 20px  0px !important;
        width: 100% !important;
        

  }
  @media (min-width: 1250px) {
    position: fixed;
        right: 44rem;
        display: flex;
        max-height: 100vh;
        width: 38%;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 6rem;
  }
  @media (max-width: 1250px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        width: 80%;
        padding: 0 17px;
}
`;
const Name = styled.h1`
  font-size: 3rem;
  color: #ccd6f6;
  margin-bottom: 10px;
  @media (max-width:450px){
        font-size: 2.5rem;
        

  }
  @media (max-width:420px){
        font-size: 2.1rem;
        margin-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #8892b0;
  margin-bottom: 20px;
  font-weight: 400;
  @media (max-width: 1250px) {
    width: 100%;
  }
 

`;

const Description = styled.p`
  font-size: 1rem;
  color: #a8b2d1;
  margin-bottom: 40px;
  line-height: 1.5;
  max-width: 80%;
  
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 30px;
`;

const IconLink = styled.a`
  color: #8892b0;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ccd6f6;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const NavLink = styled.a`
  color: #8892b0;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #ccd6f6;
  }
`;

const ResumeButton = styled.div`
  margin-top: 20px;

  .resume-link {
    display: inline-block;
    padding: 10px 20px;
    color: #0a192f;
    background-color: #ccd6f6;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #a8b2d1;
    }
  }
`;

function SideBare({ isMobileView }) {
    return (
        <Aside>
            <div>
                <Name>Gadri Mohamed</Name>
                <Title>Full-Stack Developer</Title>
                <Description>
                    I build performant, aesthetically pleasing, and accessible web applications.
                </Description>
                <SocialLinks>
                    <IconLink href="https://github.com/Gadridev" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </IconLink>
                    <IconLink href="https://www.linkedin.com/in/mohamed-gadri-742b261a6" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </IconLink>
                    <IconLink href="https://www.instagram.com/gadri_mohamed/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </IconLink>
                    <IconLink href="https://x.com/mohamedgadri4" target="_blank" aria-label="Twitter">
                        <FaXTwitter />
                    </IconLink>
                </SocialLinks>
            </div>
            {
                isMobileView ?
                    ''
                    : <NavLinks>
                        <Link to="/about">
                            <NavLink>About</NavLink>
                        </Link>
                        <Link to="/resume">
                            <NavLink >Resume</NavLink>
                        </Link>
                        <Link to="/portfolio">
                            <NavLink>Projects</NavLink>
                        </Link>
                        <Link to="/contact">
                            <NavLink >Contact</NavLink>
                        </Link>
                    </NavLinks>
            }

            <ResumeButton>
                <a href="/pdf/GadriMohamed.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
                    View My Resume
                </a>
            </ResumeButton>
        </Aside>
    );
}

export default SideBare;
