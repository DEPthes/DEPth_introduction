import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import aboutPNG from '../../img/ABOUT.png';
import projectPNG from '../../img/PROJECT.png';
import memberPNG from '../../img/MEMBER.png';
import contactPNG from '../../img/CONTACT.png';

export const Header: React.FC = () => {
    return (
        <HeaderBox>
            <Contlor
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                <img src={aboutPNG} alt="ABOUT" height="13px" />
            </Contlor>
            <Contlor
                to="/Project"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                <img src={projectPNG} alt="PROJECT" height="13px" />
            </Contlor>
            <Contlor
                to="/Member"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                <img src={memberPNG} alt="MEMBER" height="13px" />
            </Contlor>
            <Contlor
                to="/Contact"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                <img src={contactPNG} alt="CONTACT" height="13px" />
            </Contlor>
        </HeaderBox>
    );
};

const HeaderBox = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 46px;
    z-index: 10000;
`;

export const Contlor = styled(NavLink)`
    margin: 0 15px;
    position: relative;
    filter: brightness(60%);
    &.active {
        filter: brightness(100%);
    }
    &:hover {
        filter: brightness(100%);
    }
`;
