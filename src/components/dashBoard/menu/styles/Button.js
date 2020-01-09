import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { buttonWrap, buttonBase } from './styles';

export const ButtonWrap = styled.div`
    ${buttonWrap}
`;
export const StyledButton = styled(Button)`
    ${buttonBase}
    ${props => (props.floating ? buttonWrap : '')};
`;

export const Span = styled.span`
display:  ${props => props.status} ;
`;

