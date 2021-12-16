import styled, {css} from 'styled-components';
import Card from 'antd/lib/card';

export const Div = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 1px solid black;
  background: #000;
  
  ${props => props.container && css`
    margin: auto;
  `}
  
  ${props => props.flex && css`
    height: 50px;
    padding: 0 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    color: white;
  `}
  
  ${props => props.content && css`
    height: auto;
    padding: 0 10px;
    border: none;
    margin-bottom: 25px;
  `}
`;

export const StyledCard = styled(Card)`
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
  height: 100vw;
`;

export const H2 = styled.h2`
  color: white;
`;
