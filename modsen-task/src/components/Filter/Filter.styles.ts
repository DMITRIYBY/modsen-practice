import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  gap: 20px;
  padding: 20px;
`;

export const BorderedBlackSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 20px;
  background: none;
  border: 2px solid black;
`;

export const CustomSelect = styled.div`
  width: 100%;
  max-height: 60%;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: scroll;

`;

export const CustomOption = styled.div<{isSelected: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    padding: 10px;
    background: none;
    border: none;
    opacity: ${(props) => (props.isSelected ? '100%' : '50%')};
`;

export const CustomSelectIcon = styled.img`
  width: 40px;
  height: 40px;
`;