import styled from "styled-components";

export const PlacesListContainer = styled.div<{width: string}>` 
    z-index: 1000;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: ${props => props.width};
    height: 70lvh;
    padding: 20px;
    gap: 20px;
    border: 2px solid grey;
    border-radius: 5px;
    background: white;
    overflow-y: auto;

  
  -ms-overflow-style: none;  
  scrollbar-width: none;  

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const PlaceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 2px solid grey;
  border-radius: 5px;
`;

export const PlaceMineature = styled.div`
  overflow: hidden;
  border-radius: 5px;
`;