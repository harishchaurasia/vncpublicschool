import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  background-color: #64B6AC;
  width: 600px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 16px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const Info = styled.div`
  text-align: center;
`;

const Name = styled.h2`
  margin: 8px 0;
  font-size: 1.2em;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
`;

const Position = styled.h3`
  margin: 0;
  font-size: 1em;
  color: #666;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
`;

const MessageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.p`
  margin: 0;
  font-size: 1em;
  color: #333;
  font-family: 'Arial', sans-serif;
  text-align: left;
`;

const DeskCard = ({ image, name, position, message }) => {
  return (
    <Card>
      <LeftSection>
        <ImageWrapper>
          <Image src={image} alt={`${name}'s picture`} />
        </ImageWrapper>
        <Info>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </Info>
      </LeftSection>
      <MessageWrapper>
        <Message>{message}</Message>
      </MessageWrapper>
    </Card>
  );
};

export default DeskCard;
