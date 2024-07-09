import styled from "styled-components";

export const WideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BorderedInput = styled.input`
  height: 30px;
  width: 100%;
  font-size: 18px;
  border: 2px solid lightgray;
  border-radius: 5px;
  font-family: "Rubik", sans-serif;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;

export const CenterPageContainer = styled(PageContainer)`
    height: 100svh;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

