import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    background: white;
    border-bottom: 1px solid grey;
    box-shadow: 0px 3px 2px 2px rgba(0, 0, 0, 0.1); 
    margin-bottom: 10px;
`;

export const HeaderFix = styled.div`
    height: 50px;
    background: none;
`;
