import React from "react";
// import "./css/Template.css"
import styled from 'styled-components';
import TodoHead from "./TodoHead";

const StyledTemplate = styled.div`
    padding-top: 20px;
    max-height: 100vh;
        .title {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 20px;
            font-size: 1.5rem;
            font-weight: bold;
            color: #007d36;
        }

`

const Template = ({ children, todoLength }) => {
    return (
        <StyledTemplate>
            <TodoHead todoLength={todoLength} />
            <div className="todoChildren">{children}</div>
        </StyledTemplate>
    )
}






export default Template;