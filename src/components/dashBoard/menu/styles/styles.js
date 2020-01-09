import { css } from 'styled-components';

export const gridBase = css`background: transparent;`;

export const gridcolumnMenu = css`
padding: 0 !important;
height: 100vh;
transition: width 0.3s;`;

export const gridcolumnContent = css`
background: transparent !important;
padding: 10 !important;
height: 100vh;
transition: width 0.3s;`;

export const menuWrap = css`width: 100%;
height: 100%;
background: #252631;
padding: 6px;
display:flex;
justify-content: center;`;

export const buttonWrap = css`
width: 100% ;
height: 50px ; 
display: block; 
`;

export const buttonBase = css`   
background: transparent !important ;
width: 100% !important;
height: 100% !important;
color: white !important;
font-weight: bold !important;
font-size: 0.875rem;
font-family: Roboto;
letter-spacing: 0.3px !important;
margin-bottom: 1.4rem !important;
white-space: nowrap;
overflow: hidden;
&:hover{
    color: white !important;
    background-color:rgba(186,186,186,0.4) !important;
}
&:focus{
    color: white !important;
    background-color:#444bf8 !important;
}`;
export const iconBase = css`
display: inline  !important;
padding: 0 !important;
margin: 0 !important;
height: '1em';
`;