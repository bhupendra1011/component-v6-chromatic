import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {PrimaryButton,SecondaryButton,TertiaryButton} from "./components/Buttons/Buttons";
import {GlobalStyle, darkTheme , defaultTheme} from "./utils";

import { ThemeProvider } from "styled-components";


const App = () => {
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';  
    return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
        <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
        <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
      </ToggleContainer>
    );
  };

  const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 8rem;
  height: 3.5rem;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  outline:none;

  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const rowStyle = {
  display:"flex", 
  justifyContent:"space-between",
  maxWidth:"600px",
  marginLeft:"40px",
  marginBottom:"20px"
}

const containerStyle = {
  padding:"20px",
  width:"100%",
  height:"100%",
  overflowX:"hidde",
  background: theme === 'light' ? darkTheme.primaryColor : defaultTheme.primaryColor,
  transition:'all .2s linear'
}

const textStyle = {
  color:theme === 'light' ?  defaultTheme.primaryColor :  darkTheme.primaryColor
}

  return(
    <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
    <div style={containerStyle}>  
    <div style={{display:"flex",alignItems:"center"}}>
    <h1 style={{flexGrow:1,textAlign:"center",...textStyle}}> Saxo ~ UI Component Kit</h1>
    <Toggle theme={theme} toggleTheme={toggleTheme} />
    </div> 
   
    <h2 style={textStyle}>Default States</h2>
    <div style={rowStyle}>
     <PrimaryButton> Primary</PrimaryButton>
     <SecondaryButton>Secondary</SecondaryButton>
     <TertiaryButton>Tertiary</TertiaryButton>
     </div>

     <hr/>

     <h2 style={textStyle}>Disabled States</h2>
     <div style={rowStyle}> 
     <PrimaryButton disabled> Primary</PrimaryButton>
     <SecondaryButton disabled>Secondary</SecondaryButton>
     <TertiaryButton disabled>Tertiary</TertiaryButton>
     </div>

     <hr/>
     <h2 style={textStyle}>Button Sizes</h2>
     <div style={rowStyle}> 
     <PrimaryButton modifiers={["small"]}> Small Primary</PrimaryButton>
     <SecondaryButton modifiers={["small"]} >Small </SecondaryButton>
     <PrimaryButton modifiers={["large"]}>large Primary</PrimaryButton>
     <SecondaryButton modifiers={["large"]} >large Secondary </SecondaryButton>
     </div>

     <hr/>
     <h2 style={textStyle}>Button States : Primary Button</h2>
     <div style={rowStyle}> 
     <PrimaryButton modifiers={["large","success","primaryButtonSuccess"]}> Success</PrimaryButton>
     <PrimaryButton modifiers={["large","warning","primaryButtonWarning"]}> Warning</PrimaryButton>
     <PrimaryButton modifiers={["large","error","primaryButtonError"]}> Error</PrimaryButton>
     </div>
     <h2 style={textStyle}>Button States : Secondary Button</h2>
     <div style={rowStyle}> 
     <SecondaryButton modifiers={["large","success","secondaryButtonSuccess"]}> Success</SecondaryButton>
     <SecondaryButton modifiers={["large","warning","secondaryButtonWarning"]}> Warning</SecondaryButton>
     <SecondaryButton modifiers={["large","error","secondaryButtonError"]}> Error</SecondaryButton>
     </div>
     <h2 style={textStyle}>Button States : Tertiary Button</h2>
     <div style={rowStyle}> 
     <TertiaryButton modifiers={["large","success"]}> Success</TertiaryButton>
     <TertiaryButton modifiers={["large","warning"]}> Warning</TertiaryButton>
     <TertiaryButton modifiers={["large","error"]}> Error</TertiaryButton>
     </div>



     <GlobalStyle/>
    </div>
    </ThemeProvider>
  )
}

ReactDOM.render( 
    <App />,
  document.getElementById('root')
);



