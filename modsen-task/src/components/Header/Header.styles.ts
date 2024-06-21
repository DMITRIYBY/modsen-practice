import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 40px;
    height: 100lvh;
    padding: 30px;
    gap: 15px;
    background: white;
    border-bottom: 1px solid grey;
    box-shadow: 0px 3px 2px 2px rgba(0, 0, 0, 0.1); 
    margin-bottom: 10px;
`;

export const HeaderFix = styled.div`
    width: 40px;
    background: none;
`;
export const IconicButton = styled.button<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: ${props => props.color};
  border: 1px solid grey;
  border-radius: 5px;
`;

export const GreyStroke = styled.hr`
  width: 80%;
  size: 1px;
  color: grey;
`;