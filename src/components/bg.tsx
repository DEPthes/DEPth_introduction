import React from 'react';
import styled from 'styled-components';
import good from '../img/AboutBg.png';

type BackgroudChidType = {
    children: React.ReactNode;
    heightValue: string;
};

const Bg: React.FC<BackgroudChidType> = ({ children, heightValue }) => {
    return <ImgStyle>{children}</ImgStyle>;
};

export default Bg;

const ImgStyle = styled.div`
    background-image: url(${good});
    width: 100%;
    background-size: cover;
    height: auto;
    z-index: -999999;
`;
