import styled from "@emotion/styled";

export const List = styled.ul`
    color:#1F4E49;
    font-size: large;
`
export const ListItem = styled.li`
    display: flex;
    margin-top: 4px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F2F2;
    border-bottom:1px solid #1F4E49;

    :hover,
    :focus{
        border-color: #FF931E;
        background-color: #CCEBE8;
    }
`