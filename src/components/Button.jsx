import styled from "styled-components";

const Button = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: #262E38;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.4rem;
  color: #7C8798;
  cursor: pointer;
  &:hover{
    background: #FC7614;
    color: #fff;
  }
`;

export default Button;
