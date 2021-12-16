import styled, {css} from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  
  ${props => props.common && css`
    width: 268px;
  `}
  
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
    height: 455px;
    background: #ffffff;
    border: 1px solid #b8b8b8;
    margin-bottom: 10px;
  `}
  
  ${props => props.img && css`
    width: 200px;
    height: auto;
    margin: 10px auto;
  `}
  
  ${props => props.phrases && css`
    margin: 0 auto 10px auto;
    font-size: 18px;
    text-align: center;
  `}
  
  ${props => props.kakao && css`
    height: 32px;
    margin: auto;
    background: #efef01;
    border-radius: 5px;
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

  ${props => props.signin && css`
    height: 80px;
    margin: 0;
  `}
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
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

export const Button = styled.button`
  width: 268px;
  height: 30px;
  font-weight: bold;
  color: white;
  background: lightskyblue;
  border: none;
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const A = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  
  ${props => props.signin && css `
    margin-left: 3px;
    color: deepskyblue;
  `}
`;
