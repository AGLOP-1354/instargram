import styled, {css} from "styled-components";

export const Div = styled.div`
  display:flex;
  color: darkgray;
  
  ${props => props.container && css`
    width: 100vw;
    height: calc(100vh - 102px);
    background: #000;
    flex-direction: column;
  `}
  
  ${props => props.header && css`
    box-sizing: border-box;
    width: 100vw;
    height: 100px;
    padding: 0 0 10px 0;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  `}
  
  ${props => props.line && css`
    align-items: center;
    flex-direction: column;
  `}
  
  ${props => props.img && css`
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    position: relative;
  `}
  
  ${props => props.contents && css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const P = styled.p`
  color: #fff;
  font-weight: bold;
  position: absolute;
  bottom: -20px;
  left: 0;
`;

export const Span = styled.span`
  width: 15px;
  height: 15px;
  padding: 2px;
  border-radius: 50%;
  background: dodgerblue;
  color: white;
  position: absolute;
  bottom: 0px;
  right: 0;
  border: 2px solid #000;
`;

export const Button = styled.button`
  box-sizing: border-box;
  padding: 5px;
  text-align: center;
  width: 90vw;
  height: 30px;
  background: #000;
  color: #fff;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;
