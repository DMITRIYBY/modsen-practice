import styled from "styled-components";

export const PlacesListContainer = styled.div<{isShow: boolean, width: string}>` 
    z-index: 1000;
    position: fixed;
    display: ${props => (props.isShow ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: ${props => props.width};
    height: 100lvh;
    padding: 20px;
    gap: 20px;
    margin-left: 120px;
    background: white;
    overflow-y: auto;
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