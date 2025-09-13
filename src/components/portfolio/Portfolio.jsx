import styled from "styled-components";
import { FaCircleChevronDown, FaCircleChevronUp, FaLocationArrow } from "react-icons/fa6";
import PinContainer from "./PinContainer";
import image1 from '../../assets/icons/p1.svg'
import image2 from '../../assets/icons/p2.svg'
import image3 from '../../assets/icons/p3.svg'
import image4 from '../../assets/icons/p4.svg'
import image5 from '../../assets/icons//re.svg'
import image6 from '../../assets/icons/tail.svg'
import image7 from '../../assets/icons//ts.svg'
import image8 from '../../assets/icons//stream.svg'
import { useResume } from "../../Context/ResumeContext";
import toast from "react-hot-toast";
import { useState } from "react";

// Styled Components
const Section = styled.div`
  padding: 0 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  
`;




const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0;
  @media (min-width: 1024px) {
    border-radius: 1rem;
  }
`;

const ForegroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  z-index: 10;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 4rem 0rem; /* Space between cards */
  justify-items: center; /* Center cards */
  padding: 1rem 0rem;
  @media (max-width: 728px) {
    grid-template-columns:1fr;
    
  }
`;

const ProjectCard = styled.div`
  height: 22rem; /* Smaller height */
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: space-between; /* Space between card content */
  align-items: center;
  width: 100%; /* Make width responsive */
  max-width: 20rem; /* Limit the width of each card */
  border-radius: 1rem; /* Rounded corners */
  padding: 1rem; /* Add internal padding */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effect */
  margin:11px;

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem; /* Smaller height for images */
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.75rem; /* Add rounding for consistency */

  @media (min-width: 768px) {
    height: 12rem; /* Slightly larger on medium screens */
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff; /* Make text visible on dark background */
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  text-align: center;
  color: #bec1dd;
  margin: 0.5rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Adjust number of visible lines */
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  gap: 30px;
  
`;

const IconListContainer = styled.div`
  display: flex;

  div {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    background-color: black;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 2.3rem;
      height: 2.3rem;
    }
   
  }
`;

const LiveSite = styled.div`
  display: flex;
  align-items: center;
  width: 104px;

  p {
    font-size: 0.875rem;
    color: #cbacf9;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  svg {
    margin-left: 0.5rem;
  }
`;
const IconWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2); /* Border with opacity */
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || '2.5rem'}; /* Default to lg:w-10 (40px) */
  height: ${({ size }) => size || '2.5rem'};
  transform: ${({ index }) => `translateX(-${5 * index + 2}px)`}; /* Dynamic transform */
  transition: transform 0.2s ease;
  img {
    width: 20px;
    border-radius: 50%; /* Equivalent to Tailwind's p-2 */
  }
`;
const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  padding: 0;
  color: #4f46e5;
  /* Primary color matching the theme */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #0056b3; /* Slightly darker shade on hover */
    transform: scale(1.05);
  }

  &:hover svg {
    transform: translateY(3px);
  }
`;



// Component
const notify = () => toast('🚀 Coming soon! Stay tuned for the hosted live demo.');

const Protfolio = () => {
  const { portfolio } = useResume()
  const [showMore, SetShowMore] = useState(false)



  return (
    <Section>
      <Heading>
        Project
      </Heading>

      <ProjectsContainer>
        {portfolio.slice(0, showMore ? portfolio.length : 4).map((item) => (
          <ProjectCard key={item.id}>
            <PinContainer
              title="github"
              href={item.git}
            >
              <ImageContainer>
                <BackgroundImage>
                  <img src="/bg.png" alt="Background" />
                </BackgroundImage>
                <ForegroundImage
                  src={item.image}
                  alt="Cover"
                />
              </ImageContainer>

              <Title>{item.title}</Title>

              <Description>{item.description}</Description>

              <Footer>
                <IconListContainer>
                  {item.tags.map((icon, index) => (
                    <IconWrapper key={index} index={index} >
                      <img src={icon} alt="Icon" className="p-2" />
                    </IconWrapper>
                  ))}
                </IconListContainer>


                <a href={item.live} target="_blank" onClick={item.live === null && notify}>
                  <LiveSite>
                    <p>Check Live</p>
                    <FaLocationArrow color="#CBACF9" />
                  </LiveSite>
                </a>
              </Footer>
            </PinContainer>
          </ProjectCard>
        ))}
      </ProjectsContainer>
      <ShowMoreButton onClick={() => SetShowMore(!showMore)} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {showMore ? "Show Less" : "Show More Projects"}
        {showMore ? <FaCircleChevronUp /> : <FaCircleChevronDown />}
      </ShowMoreButton>
    </Section>
  );
};
export default Protfolio;

