import styled, {css} from "styled-components";

export const Div = styled.div`
  
    ${props => props.container && css`
      box-sizing: border-box;
      width: 100vw;
      height: auto;
      margin: auto;
      display: flex;
      justify-content: center;
      position: relative;
      overflow: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    `}
  
    ${props => props.flex && css`
      display: flex;
      flex-direction: column;
      margin:50px 0;
    `}
    `;
