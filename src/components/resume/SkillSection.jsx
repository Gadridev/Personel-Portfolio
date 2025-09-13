// SkillsSection.jsx

import styled from "styled-components";
import SkillItem from "./SkilItem";
import { Title } from "../about/About";
const Skill=styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 8px;
    font-weight: var(--fw-400);
    line-height: 1.6;
`
const SkillsTitle=styled.h3`
   margin-bottom: 20px;
`
const SkillCard=styled.ul`
  padding: 20px;
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  z-index: 1;
  &::before{
    content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  z-index: -1;
  }
  @media (min-width: 580px) {
  
        padding: 30px;
        padding-top: 25px;
    
}
`
const SkillsSection = ({ skills }) => {
  return (
    <Skill>
      <Title>My skills</Title>
      <SkillCard>
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </SkillCard>
    </Skill>
  );
};

export default SkillsSection;
