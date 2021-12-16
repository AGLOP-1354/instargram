import styled, {css} from "styled-components";

export const Form = styled.form`
  width: 100vw;
`;

export const Div = styled.div`
  ${props => props.img && css`
    display: flex;
    flex-direction: column;
  `}  
  
  ${props => props.showImg && css`
    box-sizing: border-box;
    width: 100vw;
    height: calc(100vw - 20px);
    padding: 1px 20px 20px 20px;
    background: #000;
  `}
  
  ${props => props.container && css`
    height: calc(100vh - 100px);
    position: relative;
  `}
`;

export const Input = styled.input`
  
    ${props => props.img && css`
      display: none;
    `}

`;

export const Label = styled.label`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding-right: 10px;
  line-height: 35px;
  background: #000;
  color: #fff;
  text-align: right;
  border-bottom: 1px solid #eee;
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - 100vw - 150px);
  padding: 5px 20px;
  resize: none;
  background: #000;
  color: darkgray;
  border: none;
  &:focus{
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100vw;
  height: 35px;
  background: #000;
  color: #0077ff;
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  border: none;
  border-top: 1px solid #eee;
`;

export const Img = styled.img`
  width: calc(100vw - 40px);
  height: calc(100vw - 40px);
  display: none;
`;
