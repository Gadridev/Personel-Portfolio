"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const PinContainerWrapper = styled.div`
  position: relative;
  z-index: 50;
  cursor: pointer;

  &:hover .pin-title-link {
    opacity: 1;
  }
`;

const InnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: rotateX(70deg) translateZ(0);
  perspective: 1000px;
`;

const TransformBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${({ transform }) => transform};
  padding: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  border-radius: 1.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.7s, border-color 0.3s;
  overflow: hidden;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const TitleLinkWrapper = styled(motion.div)`
  pointer-events: none;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  position: relative;
  transition: opacity 0.5s;
`;

const LinkContainer = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  border-radius: 9999px;
  padding: 0.125rem 1rem;
  box-shadow: 0 1px rgba(255, 255, 255, 0.1);
  text-decoration: none;
  pointer-events: auto; /* Ensure the anchor tag receives pointer events */

  span {
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1.125rem;
    height: 1px;
    width: calc(100% - 2.25rem);
    background: linear-gradient(
      to right,
      rgba(56, 178, 172, 0),
      rgba(56, 178, 172, 0.9),
      rgba(56, 178, 172, 0)
    );
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 0.4;
  }
`;



const AnimatedEffect = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 11.25rem;
  width: 11.25rem;
  border-radius: 50%;
  background: rgba(56, 178, 172, 0.08);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
`;
const notify = () => toast('🚀 Coming soon! Stay tuned for the code on github.');
const PinContainer = ({ children, title, link }) => {
  const [transform, setTransform] = useState(
    "translate(-50%, -50%) rotateX(0deg) scale(1)"
  );

  const handleMouseEnter = () =>
    setTransform("translate(-50%, -50%) rotateX(40deg) scale(0.8)");
  const handleMouseLeave = () =>
    setTransform("translate(-50%, -50%) rotateX(0deg) scale(1)");

  return (
    <PinContainerWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InnerWrapper>
        <TransformBox transform={transform}>
          <div>{children}</div>
        </TransformBox>
      </InnerWrapper>
      <TitleLinkWrapper className="pin-title-link">
        <div>
          <LinkContainer href={link} target="_blank" onClick={link === null ? notify : undefined}
          >
            <span>{title}</span>
          </LinkContainer>
          {[0, 2, 4].map((delay) => (
            <AnimatedEffect
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{ duration: 6, repeat: Infinity, delay }}
            />
          ))}
        </div>
      </TitleLinkWrapper>
    </PinContainerWrapper>
  );
};

export default PinContainer;
