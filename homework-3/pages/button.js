import { StyledButton } from "@/libs/Style";
import styled, { css } from "styled-components";

function Button({ children, ...props }) {
    return (
        <button 
        >{children}</button>
    )
}



export default Button;