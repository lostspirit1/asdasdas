import React, { useState } from 'react';
import {  Button, Icon } from 'semantic-ui-react';
import './style.css';

import { GridContentWrapper, GridMenuWrapper, GridWrapper } from './styles/Grid';
import { Menu } from './styles/Menu';
import { ButtonWrap, StyledButton, Span } from './styles/Button';
import { IconWrap } from './styles/Icon';

function DashBoardMenu() {
  const [open, setOpen] = useState(true); // declare new state variable "open" with setter
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <GridWrapper style={{background: '#eee'}}>
    <GridMenuWrapper desktop={open ? '12.5%' : '3.5%'} mobile= {open ? '31.25%' : '12.5%'} wdscreen = { open? '80%' : '2%'} >
    <Menu>
    <ButtonWrap>
    <StyledButton style={{padding:0}}>
      <IconWrap name='facebook' size='big'/>
      <Span status = { open ? 'inline-flex' : 'none' } > facebook </Span> 
    </StyledButton>
    </ButtonWrap>
    </Menu>

    </GridMenuWrapper>
    <GridContentWrapper desktop={open ? '87.5%' : '96.5%'} mobile = { open ? '68.75%' : '87.5%' }>
          <Button icon onClick={handleClick}>
            <Icon name="align justify" />
          </Button>
    </GridContentWrapper>
   </GridWrapper>
  );
}
{/* 
// const MenuMain = () => (
//     <>
//      <Grid style={{background: '#eee'}}>

//       <Grid.Column computer={2} tablet={4} mobile={5} style={{background: '#000', padding:'0', height:'100vh'}}>

//       <div style={{background:'#000', width:'100%', height:'100%'}}>

//       </div>
//       </Grid.Column>
//       <Grid.Column width={14} style={{background: '#eee', padding:'0'}}>

//       </Grid.Column>
//      </Grid>

//     {/* <Menu className="borderless Menu" vertical>
//         <Menu.Item className="logo">
//             <Image src={logo} style={{width:'50px', height:'30px',marginLeft:'20px'}}/>
//             <h3 style={{margin:'0', color:'#fff'}}>E M A S A</h3>
//         </Menu.Item>           
//         <Divider style={{width:'100%', color:'#000 !important'}} />
//         <Menu.Item > <Button className="btnMenu" content='Menu' icon='headphones' /> </Menu.Item>
//         <Menu.Item> <Button className="btnMenu" content='Two' icon='volume up' />  </Menu.Item>
//         <Menu.Item> <Button className="btnMenu" content='Three' icon='pause' />  </Menu.Item>
//     </Menu> */}
    {/* <Container fluid style={{padding:'0 !important', background:'#000'}}>


//      <Grid.Column  width={14} style={{padding:'0', margin: '0', background:'#000'}}>
//     <Button icon>
//          <Icon name='align justify' />
//     </Button>
//     </Grid.Column> 
//     </Container> */}   


export default DashBoardMenu;