import PropTypes from 'prop-types';
import styled from 'styled-components';
const P = styled.p`
font-size: 0.9rem;
  color: #a8b2d1;
  margin-bottom: 30px;
`
const Paragraph = ({ children }) => {
  return <P>{children}</P>;
};
Paragraph.propTypes = {
    children: PropTypes.node.isRequired,  // Ensures children is a valid React node
  };

export default Paragraph;
