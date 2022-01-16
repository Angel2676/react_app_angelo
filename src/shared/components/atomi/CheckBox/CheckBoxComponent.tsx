import styled from 'styled-components';
import React, {ReactElement, FC} from 'react';

export interface checkProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checkChange:(val:boolean)=> void
}

const StyledCheck= styled.input`
margin: 10px;
`;

const CheckBoxComponent : FC<checkProps> = ({checkChange,...props}) : ReactElement => {
    
    const handleCheckChange = (val:boolean) => {
        if(checkChange)
        checkChange(val);
    };
    

    return (
        <StyledCheck  {...props} onChange={(e)=>{handleCheckChange(e.target.checked)}}>
            
        </StyledCheck>
    )
}

export {CheckBoxComponent};