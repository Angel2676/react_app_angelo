import styled from 'styled-components';
import React, {ReactElement, FC} from 'react';

export interface linkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    primary?:boolean
}

const StyledLink = styled.a<linkProps>`
    color: ${p=> p.primary? '#ffffff' : '#000000'};
    text-decoration : none;
    font-weight: 600;
`;

const Link : FC<linkProps> = ({primary, ...props}) : ReactElement => {
    return (
        <StyledLink primary={primary} {...props}>
            {props.children}
        </StyledLink>
    )
}

export  {Link, StyledLink};