import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <ContlorBox>
            <Contlor
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                ABOUT
            </Contlor>
            <Contlor
                to="/Project"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                PROJECT
            </Contlor>
            <Contlor
                to="/Member"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                MEMBER
            </Contlor>
            <Contlor
                to="/Contact"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
                CONTACT
            </Contlor>
        </ContlorBox>
    );
};

const ContlorBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 46px;
    padding-bottom: 392px;
`;

export const Contlor = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-family: 'Sandoll Rotary';
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.67);
    margin: 18px;
    position: relative;
    &.active {
        color: #ffffff;
    }
    &:hover {
        color: #ffffff;
    }
`;
