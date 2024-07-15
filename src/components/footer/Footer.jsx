import { styled } from "styled-components";
import { Bs0Circle, BsGithub, BsLinkedin } from "react-icons/bs";

import "./Footer.css";
import logo from "../../assets/logo.png";


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  padding: 2rem;
  box-sizing: border-box;
  border-top: 4px solid var(--color-blue);
  box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const IconContainer = styled.ul`
  background-color: transparent;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    background-color: var(--color-black);
    display: inline-block;
    
    padding: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: clamp(30%, 100%, 10.528rem);
    height: auto;
    background-color: var(--color-black);
  }
`;

const FooterText = styled.p`
  background-color: transparent;
  font-size: 13px;
  color: var(--color-white-smoke);
  margin: 0;
  line-height: 1.4;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter className="container">
      <LogoContainer className="logo">
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <IconContainer>
        <li>
          <a href="https://github.com/sleopaz" target="_blank">
            <BsGithub className="icons" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/esteban-paz-vilchez-b96b73302/" target="_blank">
            <BsLinkedin className="icons" />
          </a>
        </li>
      </IconContainer>
      <FooterText className="text">
        Challenge Alura.
        <br />
        Desarrollado por Esteban Paz 
        <br />
        2024
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;
