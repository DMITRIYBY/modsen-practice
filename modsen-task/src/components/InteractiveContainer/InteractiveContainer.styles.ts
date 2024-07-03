import styled from "styled-components";

export const InteractiveContainer = styled.div<{isShow: boolean}>`
      position: fixed;
      z-index: 1000;
      display: ${(props) => (props.isShow ? 'flex' : 'none')};
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 30%;
      height: 100%;
      padding: 20px;
      margin-left: 103px;
      background: white;
  
      @media(max-width: 1024px) {
        width: 50%;
      }

      @media(max-width: 680px) {
        width: 70% ;
      }
`;