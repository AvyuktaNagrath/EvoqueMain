import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../images/evoque_transparent.png'; 

const PageContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  scroll-padding-top: 60px; 
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);  
  scroll-snap-align: start;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
`;

const Paragraph = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
`;

const OurMissionPage = () => {

  return (
    <PageContainer>
      <Section id="section-0">
        <Content>
          <Title>Our Missions</Title>
        </Content>
      </Section>
      
      <Section id="section-1">
        <Content>
          <Title>Section 1</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Content>
        <Image src={logo} alt="section 1" width={500} height={300}/>
      </Section>
      
      <Section id="section-2">
        <Content>
          <Title>Section 2</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Content>
        <Image src={logo} alt="section 2" width={500} height={300}/>
      </Section>
      
      <Section id="section-3">
        <Content>
          <Title>Section 3</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Content>
        <Image src={logo} alt="section 3" width={500} height={300}/>
      </Section>
    </PageContainer>
  );
};

export default OurMissionPage;
