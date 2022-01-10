import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <h2>{title}</h2>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
