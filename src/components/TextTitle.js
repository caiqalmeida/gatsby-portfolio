import styled from 'styled-components';

const TextTitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 2vh;
  color: ${(props) => (props.color ? props.color : '#adadad')};
`;

export default TextTitle;
