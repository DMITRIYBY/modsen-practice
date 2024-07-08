import styled from "styled-components";

export const InteractiveContainer = styled.div<{isShow: boolean}>`
      position: static;
      display: ${(props) => (props.isShow ? 'flex' : 'none')};
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 30%;
      left: 0;
      padding: 20px;
      background: white;

      @media(max-width: 1440px) {
        width: 40%;
      }
  
      @media(max-width: 1024px) {
        width: 50%;
      }

      @media(max-width: 800px) {
        width: 70% ;
      }
`;

export const ShowContainer = styled.button`
  width: 15px;
  height: 40px;
  border-radius: 5px;
  background: none;
  color: white;
`;