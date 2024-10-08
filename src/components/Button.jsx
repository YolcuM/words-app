import styled, { css } from "styled-components";

const Button = ({ text, mode}) => {
  return mode === "normal" ? (
    <ButtonBlock>{text}</ButtonBlock>
  ) : (
    <ButtonBlock $primary>{text}</ButtonBlock>
  );
};

const ButtonBlock = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &:hover {
    background: red;
    color: white;
  }

  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
`;

export default Button;
