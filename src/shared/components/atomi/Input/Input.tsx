import styled from 'styled-components';
import React, {ReactElement, FC} from 'react';

export interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    textChanged?:(val:string)=> void
}

const StyledInput= styled.input<inputProps>`
    border-radius: 10px;
    padding: 0.5rem;
    margin: 0.5rem;
`;

const Input : FC<inputProps> = ({textChanged, ...props}) : ReactElement => {

    const handleTextChanged=(val:string)=>{
        if(textChanged)
        textChanged(val);
    }

    return (
        <StyledInput {...props} onChange={(e)=>{handleTextChanged(e.target.value)}}>
            
        </StyledInput>
    )
}

export {Input};