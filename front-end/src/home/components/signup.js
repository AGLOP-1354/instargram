import styled, {css} from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  
  ${props => props.common && css`
    width: 198px;
  `}
  
  ${props => props.flex && css`
    height: 36px;
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
    width: 252px;
    height: 412px;
    background: #ffffff;
    border: 1px solid #b8b8b8;
    margin-bottom: 10px;
  `}
  
  ${props => props.img && css`
    width: 150px;
    height: auto;
    margin: 10px auto;
  `}
  
  ${props => props.phrases && css`
    width: 198px;
    margin: 0 auto 5px auto;
    font-size: 12px;
    line-height: normal;
    text-align: center;
  `}
  
  ${props => props.kakao && css`
    width: 198px;
    height: 26px;
    margin: auto;
    background: #efef01;
    border-radius: 5px;
  `}
  
  ${props => props.lineContain && css`
    width: 198px;
    height: 44px;
    margin: auto;
    justify-content: space-between;
    text-align: center;
    color: #777777;
    font-size: 12px;
  `}

  ${props => props.line && css`
    width: 74px;
    height: 1px;
    background: #b8b8b8;
  `}

  ${props => props.signin && css`
    height: 50px;
    margin: 0;
  `}
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 198px;
  height: 28px;
  margin: 0 auto 0 auto;
  background: #fafafa;
  padding: 9px 0 7px 8px;
  border: 1px solid #b8b8b8;
  &:focus {
    outline:1px solid black;
  }
  font-size: 10px;
`;

export const Button = styled.button`
  width: 198px;
  height: 30px;
  margin-top: 32px;
  font-weight: bold;
  color: white;
  background: lightskyblue;
  border: none;
  border-radius: 5px;
  font-size: 12px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const P = styled.p`
  font-size: 12px;
`;

export const A = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;  
  
  ${props => props.signin && css `
    margin-left: 3px;
    color: deepskyblue;
  `}
`;
