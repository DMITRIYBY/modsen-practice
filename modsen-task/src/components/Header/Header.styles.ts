import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: static;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40px;
    left: 0;
    padding: 30px;
    gap: 15px;
    background: white;
    border-right: 3px solid rgba(0,0,0,0.3);
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
  gap: 10px;
  background: ${props => props.color};
  border: 1px solid grey;
  border-radius: 5px;
`;

export const GreyStroke = styled.hr`
  width: 80%;
  size: 1px;
  color: grey;
`;