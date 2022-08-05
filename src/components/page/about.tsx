import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import Bg from '../bg';
import logoPNG from '../../img/MainText.png';

export const About: React.FC = () => {
    return (
        <Bg heightValue="100%">
            <LogoSection>
                <DownIconBox to="#" active="hidden">
                    <BsChevronDown />
                </DownIconBox>
                <LogoBox>
                    <LogoImg src={logoPNG} alt="로고" height="120px" />
                </LogoBox>
                <DownIconBox to="#" active="block">
                    <BsChevronDown size="30" />
                </DownIconBox>
            </LogoSection>
            <Section2>
                <S2Box>
                    <Circle />
                    <S2Heading>
                        <em>새로움</em>을 시도하고, <br /> <em>배움</em>을
                        기록하며,
                        <br />
                        <em>끊임없는 소통</em>을 통해 성장하는 뎁스입니다.
                    </S2Heading>
                </S2Box>
            </Section2>
        </Bg>
    );
};
const LogoSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const LogoBox = styled.div``;

const LogoImg = styled.img``;

const DownIconBox = styled(Link)<{ active: string }>`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    visibility: ${(props) => props.active};
    color: white;
`;
const Section2 = styled.section`
    width: 100%;
    height: 1250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const S2Box = styled.div``;

const Circle = styled.div`
    width: 26px;
    height: 26px;
    left: 384px;
    top: 1394px;
    border-radius: 100%;
    background: #2723ec;
    box-shadow: 0px 0px 10px 1px #2723ec;
`;

const S2Heading = styled.h1`
    font-weight: 300;
    em {
        font-weight: 700;
    }
`;
