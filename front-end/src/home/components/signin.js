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
    width: 252px;
    height: 318px;
    background: #ffffff;
    border: 1px solid #b8b8b8;
    margin-bottom: 10px;
  `}
  
  ${props => props.img && css`
    width: 150px;
    height: auto;
    margin: 20px auto;
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
  
  ${props => props.signup && css`
    height: 54px;
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
    padding-bottom: 15px;
  `}
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  width: 198px;
  height: 28px;
  font-weight: bold;
  color: white;
  background: lightskyblue;
  border: none;
  border-radius: 5px;
  font-size: 12px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 198px;
  height: 32px;
  margin: 0 auto 8px auto;
  background: #fafafa;
  padding: 9px 0 7px 8px;
  border: 1px solid #b8b8b8;
  &:focus {
    outline:1px solid black;
  }
  font-size: 12px;
`;
export const P = styled.p`
    font-size:12px;
`;
export const A = styled.a`
  text-decoration: none;
  color: #000a73;
  padding-bottom: 15px;
  font-weight: bold;
  cursor: pointer;
  font-size: 13px;

  ${props => props.signup && css`
    margin-left: 3px;
    color: deepskyblue;
    font-size: 12px;
    padding-top: 15px;
  `}
`;

