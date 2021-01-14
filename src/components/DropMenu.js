import React from "react";
import styled from "styled-components";
import {menuData} from '../data/MenuData';
import {Button} from './Button';
import {Link } from 'react-router-dom';
import {IoMdCloseCircle} from 'react-icons/io';

const DropMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  background: #cdcdcd;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const DropDownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;


`;

const DropWrapper = styled.div``;

const DropLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &::hover {
    color: #fff;
  }
`;

const BtnWrap = styled.div``;

const CloseIcon = styled(IoMdCloseCircle)``;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

const DropMenu = ({isOpen, toggle}) => {
  return (
    <div>
      <DropMenuContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropWrapper>
          <DropDownMenu>
            {menuData.map((item, index) => (
              <DropLink to={item.link} key={index}>
                {item.title}
              </DropLink>
            ))}
          </DropDownMenu>
          <BtnWrap>
            <Button primary="true" to="/contact">
              Contact Us
            </Button>
          </BtnWrap>
        </DropWrapper>
      </DropMenuContainer>
    </div>
  );
};

export default DropMenu;
