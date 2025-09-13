import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Container = styled.div`
  background-color: #1a1d23;
  color: #fff;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #e0e0e0;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #9aa0a6;
`;

const Description = styled.p`
  color: #a1a1a1;
`;

const Button = styled.button`
  background-color: #3b3f45;
  color: #e0e0e0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #50545b;
  }
`;

const Timeline = styled.div`
  margin-top: 30px;
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const TimelineIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffcc00;
  color: #1a1d23;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin-right: 20px;
`;

const TimelineContent = styled.div`
  background-color: ${(props) => (props.isEven ? '#313640' : '#2a2e35')};
  padding: 20px;
  border-radius: 5px;
  text-align: left;
  width: 100%;
`;

const TimelineTitle = styled.h4`
  color: #e0e0e0;
  margin: 0;
  font-size: 1.2em;
`;

const TimelineDate = styled.p`
  margin: 5px 0;
  color: #b3b3b3;
`;

const VerticalLine = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  width: 2px;
  height: 100%;
  background-color: #555;
`;

const ResumeTimeline = () => {
  return (
    <Container>
      <Title>Gadri Mohamed</Title>
      <Subtitle>Full-Stack Developer</Subtitle>
      <Description>
        I build performant, aesthetically pleasing, and accessible web applications.
      </Description>
      <Button>View my resume</Button>

      <Timeline>
        <VerticalLine />
        {/* Education Section */}
        <TimelineItem>
          <TimelineIcon>
            <FaGraduationCap />
          </TimelineIcon>
          <TimelineContent>
            <TimelineTitle>VIT University, Chennai</TimelineTitle>
            <TimelineDate>2017 - 2021</TimelineDate>
            <p>Education description goes here.</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineIcon>
            <FaGraduationCap />
          </TimelineIcon>
          <TimelineContent isEven>
            <TimelineTitle>FIITJEE Junior College</TimelineTitle>
            <TimelineDate>2015 - 2017</TimelineDate>
            <p>Another description here.</p>
          </TimelineContent>
        </TimelineItem>

        {/* Experience Section */}
        <TimelineItem>
          <TimelineIcon>
            <FaBriefcase />
          </TimelineIcon>
          <TimelineContent>
            <TimelineTitle>CEO, ArtUp</TimelineTitle>
            <TimelineDate>January 2022 - Present</TimelineDate>
            <p>Experience details here.</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineIcon>
            <FaBriefcase />
          </TimelineIcon>
          <TimelineContent isEven>
            <TimelineTitle>DevOps Engineer, NCR Corporation</TimelineTitle>
            <TimelineDate>December 2021 - Present</TimelineDate>
            <p>Experience details here.</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default ResumeTimeline;
