import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const TimelineItemWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 10px 0;
  width: 50%;

  justify-content: ${({ isOdd }) => (isOdd ? 'flex-start' : 'flex-end')};
  align-self: ${({ isOdd }) => (isOdd ? 'flex-end' : 'inherit')};
  padding-right: ${({ isOdd }) => (isOdd ? '0' : '30px')};
  padding-left: ${({ isOdd }) => (isOdd ? '30px' : '0')};

  ${media.lessThan("925px")`
    width: 100%;
    justify-content: flex-start;
    align-self: flex-end;
    padding-right: 0;
    padding-left: 30px;
  `}
`;

const TimelineItemContent = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #2b2b2d;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  width: 400px;
  max-width: 70%;

  text-align: ${({ isOdd }) => (isOdd ? 'left' : 'right')};
  align-items: ${({ isOdd }) => (isOdd ? 'flex-start' : 'flex-end')};

  @media (min-width: 1023px) {
    max-width: 100%;
  }

  &::after {
    content: '';
    background-color: #2b2b2d;
    position: absolute;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;

    right: ${({ isOdd }) => (isOdd ? 'auto' : '-7.5px')};
    left: ${({ isOdd }) => (isOdd ? '-7.5px' : 'unset')};
  }

  ${media.lessThan("925px")`
    text-align: left;
    align-items: flex-start;
    max-width: 90%;

    &::after {
      right: auto;
      left: -7.5px;
    }
  `}
`;

const Tag = styled.span`
  background: ${(props) => props.background};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  top: 5px;
  letter-spacing: 1px;
  padding: 5px;
  position: absolute;
  text-transform: uppercase;

  left: ${({ isOdd }) => (isOdd ? 'auto' : '5px')};
  right: ${({ isOdd }) => (isOdd ? '5px' : 'unset')};

  ${media.lessThan("925px")`
    left: auto;
    right: 5px;
  `}
`;

const Time = styled.time`
  color: #777;
  font-size: 12px;
  font-weight: bold;
`;

const TimelineItemContentText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;
  max-width: 100%;
`;

const Circle = styled.span`
  background-color: ${(props) => props.background};
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  z-index: 100;

  right: ${({ isOdd }) => (isOdd ? 'auto' : '-40px')};
  left: ${({ isOdd }) => (isOdd ? '-40px' : 'unset')};

  ${media.lessThan("925px")`
    right: auto;
    left: -40px;
  `}
`;

const TimelineItem = ({ data, isOdd }) => {
  const dataCategory = data.category ? data.category : { category: {} };

  return (
    <TimelineItemWrapper isOdd={isOdd}>
      <TimelineItemContent isOdd={isOdd}>
        <Tag isOdd={isOdd} background={dataCategory.color}>
          {dataCategory.tag}
        </Tag>
        <Time>{data.date}</Time>
        <TimelineItemContentText>{data.text}</TimelineItemContentText>
        <Circle isOdd={isOdd} background={dataCategory.color} />
      </TimelineItemContent>
    </TimelineItemWrapper>
  );
};

export default TimelineItem;
