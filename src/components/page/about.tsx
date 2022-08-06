import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import Bg from '../bg';
import logoPNG from '../../img/MainText.png';

type S2BoxTextType = {
    heading: string;
    p: string;
};

export const S2Box: React.FC<S2BoxTextType> = ({ heading, p }) => {
    return (
        <S2BoxDiv>
            <S2BoxH2>{heading}</S2BoxH2>
            <S2BoxP>
                {p.split('\n').map((txt) => (
                    <>
                        {txt}
                        <br />
                    </>
                ))}
            </S2BoxP>
        </S2BoxDiv>
    );
};

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
                <S2Container>
                    <Circle color="#2723ec" />
                    <S2Heading>
                        <em>새로움</em>을 시도하고, <br /> <em>배움</em>을
                        기록하며,
                        <br />
                        <em>끊임없는 소통</em>을 통해 성장하는 뎁스입니다.
                    </S2Heading>
                    <S2BoxContainer>
                        <S2Box
                            heading="창업동아리 선정"
                            p={
                                '프로젝트에 전문성을 더하고,  더 빠른 성장을 \n 위해 학교에서 지원하는 창업동아리에 지원하여 \n 선정되었습니다.'
                            }
                        />
                        <S2Box
                            heading="지속적인 스터디 운영 "
                            p={
                                '끊임 없는 배움과 새로운 시도를 지향하여 팀 간의 \n 꾸준한 스터디를 진행해오고 있습니다. \n '
                            }
                        />
                        <S2Box
                            heading="다양한 채널 운영 "
                            p={
                                '협업에 있어 소통의 중요함을 알고 이를 위해 \n 노션, 슬랙과 같은 협업 툴을 적극 활용하고 \n   있습니다. '
                            }
                        />
                    </S2BoxContainer>
                </S2Container>
            </Section2>
            <Section3>
                <S3Container>
                    <S3PhotoBox>
                        <S3Photo />
                        <S3Photo />
                        <S3Photo />
                        <S3Photo />
                    </S3PhotoBox>
                    <S3TextBox>
                        <Circle color="#05F5FF" />
                        <S3Heading>
                            뎁스는 <br /> <em>어떤일</em>을 할까?
                        </S3Heading>
                        <S3P>
                            &#34;서비스 런칭 &#34;이라는 하나의 목표로 <br />
                            기획, 개발, 디자인 12명이 모여 함께 <br /> 시작하게
                            된 소모입니다.
                        </S3P>
                    </S3TextBox>
                </S3Container>
            </Section3>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const S2Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Circle = styled.div<{ color: string }>`
    width: 26px;
    height: 26px;
    left: 384px;
    top: 1394px;
    border-radius: 100%;
    background: ${(props) => props.color};
    box-shadow: 0px 0px 10px 1px ${(props) => props.color};
    margin-left: 10px;
    margin-bottom: 22px;
`;

const S2Heading = styled.h1`
    font-weight: 300;
    font-size: 40px;
    em {
        font-weight: 700;
    }
    margin-left: 10px;
    margin-bottom: 35px;
`;

const S2BoxContainer = styled.div`
    display: flex;
`;

const S2BoxDiv = styled.div`
    width: 367px;
    height: 196px;
    background: #d9d9d9;
    backdrop-filter: blur(14px);
    border-radius: 24px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`;

const S2BoxH2 = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
    margin-left: 33px;
`;

const S2BoxP = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-left: 33px;
`;

const Section3 = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const S3Container = styled.div`
    display: flex;
    align-items: center;
`;

const S3PhotoBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 150px;
`;

const S3Photo = styled.div`
    width: 346px;
    height: 255px;
    background-color: red;
    border: 4px dashed #bcbcbc;
    margin: 10px;
    border-radius: 32px;
`;

const S3TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const S3Heading = styled.h1`
    font-weight: 300;
    font-size: 40px;
    em {
        font-weight: 700;
    }
    margin-left: 10px;
    margin-bottom: 35px;
`;

const S3P = styled.p`
    font-weight: 350;
    font-size: 20px;
    margin-left: 10px;
`;
