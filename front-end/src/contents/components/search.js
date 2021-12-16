import styled from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding: 5px;
  background: #000;
`;

export const Input = styled.input`
  width: 80%;
  background: #3d3d3d;
  color: #eee;
  padding: 5px 10px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  border: none;
  color: white;
  background: #000;
`;
