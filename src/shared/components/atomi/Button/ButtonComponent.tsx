import styled from 'styled-components';
import React, {ReactElement, FC} from 'react';

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    primary?:boolean
    // click?:void   // Void ci dice che questo parametro è una funzione
    click?:(param?:boolean)=> void  // Funzione che ritorna una funzione
}

const StyledButton = styled.button<buttonProps>`
    background: ${p=> p.primary ? 'linear-gradient(to right, #3571ff, #21c0ff)' : '#f0f0f0' };
    color: ${p=> p.primary ? '#ffffff' :(p.color? p.color: '#000000')};
    &:hover {background:${p=> p.primary? 'linear-gradient(to left, #3571ff, #21c0ff)' : '#cacaca'}};
    padding: 0.5rem;
    border-radius: 20px;
    border: none;
`;

const Button : FC<buttonProps> = ({primary,click, ...props}) : ReactElement => {

    const handleClick = ()=>{
        if(click) {               
            click();
        }
    }

    return (
        <StyledButton primary={primary} {...props} onClick={()=>{handleClick()}}>
            {props.children}
        </StyledButton>
    )
}

export  {Button, StyledButton};