import styled, {css} from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  
  ${props => props.flex && css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  
  ${props => props.container && css`
    width: 100vw;
    height: 100vh;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
  
  ${props => props.info && css`
    width: 350px;
    height: 382px;
    background: #ffffff;
    border: 1px solid #b8b8b8;
    margin-bottom: 10px;
  `}
  
  ${props => props.img && css`
    width: 200px;
    height: auto;
    margin: 20px auto;
  `}
  
  ${props => props.lineContain && css`
    width: 268px;
    height: 44px;
    margin: auto;
    justify-content: space-between;
    text-align: center;
    color: #777777;
    font-size: 14px;
  `}
  
  ${props => props.line && css`
    width: 100px;
    height: 1px;
    background: #b8b8b8;
  `}
  
  ${props => props.signup && css`
    height: 80px;
    margin: 0;
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  
  ${props => props.kakao && css`
    width: 20px;
    height: auto;
    margin-right: 5px;
  `}
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  width: 268px;
  height: 30px;
  font-weight: bold;
  color: white;
  background: lightskyblue;
  border: none;
  border-radius: 5px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 268px;
  height: 36px;
  margin: 0 auto 8px auto;
  background: #fafafa;
  padding: 9px 0 7px 8px;
  border: 1px solid #b8b8b8;
  &:focus {
    outline:1px solid black;
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: #000a73;
  font-weight: bold;
  cursor: pointer;
  
  ${props => props.signup && css`
    margin-left: 3px;
    color: deepskyblue;
  `}
`;
