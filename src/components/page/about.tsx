import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import Bg from '../bg';
import logoPNG from '../../img/MainText.png';
import PMPNG from '../../img/PM.png';

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
type S4BoxTextType = {
    heading: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: any;
    color: string;
    flex: string;
    display: string;
};

export const S4CommentStart: React.FC<S4BoxTextType> = ({
    heading,
    name,
    p,
    color,
    flex,
    display,
}) => {
    return (
        <S4CommentDivColumn flex={flex}>
            <S4CommentHeading display={display}>{heading}</S4CommentHeading>
            <S4CommentContentDiv>
                <S4CommentProfileDivStart>
                    <S4CommentProfileImg src={PMPNG} alt="미모지" />
                    <S4CommentProfileName color={color}>
                        {name}
                    </S4CommentProfileName>
                </S4CommentProfileDivStart>
                <S4CommentTextBox>
                    <S4CommentText>{p}</S4CommentText>
                </S4CommentTextBox>
            </S4CommentContentDiv>
        </S4CommentDivColumn>
    );
};

export const S4CommentEnd: React.FC<S4BoxTextType> = ({
    heading,
    name,
    p,
    color,
    flex,
    display,
}) => {
    return (
        <S4CommentDivColumn flex={flex}>
            <S4CommentHeading display={display}>{heading}</S4CommentHeading>
            <S4CommentContentDiv>
                <S4CommentTextBox>
                    <S4CommentText>{p}</S4CommentText>
                </S4CommentTextBox>
                <S4CommentProfileDivEnd>
                    <S4CommentProfileImg src={PMPNG} alt="미모지" />
                    <S4CommentProfileName color={color}>
                        {name}
                    </S4CommentProfileName>
                </S4CommentProfileDivEnd>
            </S4CommentContentDiv>
        </S4CommentDivColumn>
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
            <Section4>
                <S4Container>
                    <S4TextBox>
                        <S4Heading>그럼 뎁스는 무엇을 할까?</S4Heading>
                        <S4P>기획, 개발, 디자인팀은 이러한 역할을 합니다.</S4P>
                    </S4TextBox>
                    <S4CommentFlexStart>
                        <S4CommentStart
                            display="block"
                            flex="flex-start"
                            heading="기획팀은 무엇을 하나요?"
                            name="Product Manager"
                            p={
                                <>
                                    기획은 서비스 큰 틀을 잡아주고 목표와
                                    방향성을 잡아주는 역할을 합니다.
                                    시장분석부터 시작해서 기능정의서 작성과
                                    와이어프레임 등 전반적으로 서비스의 내용을
                                    채워주기도 합니다. 가장 오래걸리는
                                    단계이지만
                                    <br /> 그만큼 단단하게 서비스의 틀을
                                    잡아주는 역할을 하기 때문에 기획부의 역할이
                                    매우 큽니다. <br />
                                    <em>기획부 파이팅!</em>
                                </>
                            }
                            color="#001aff"
                        />
                    </S4CommentFlexStart>
                    <S4CommentFlexEnd>
                        <S4CommentEnd
                            display="block"
                            flex="flex-end"
                            heading="개발팀은 무엇을 하나요?"
                            name="FrontEnd Developer"
                            p={
                                <>
                                    프론트엔드 팀은 사용자와 서비스를 연결해
                                    주는 과정의 모든 것을 구현하는 역할을
                                    합니다. <br /> 백엔드 팀, 디자인 팀과
                                    협업하며 더 효율적인 데이터 처리 방법과 높은
                                    퀄리티의 화면을
                                    <br /> 구현하기 위해 노력합니다.
                                    프론트엔드의 가치는 서비스의 가치와
                                    직결되므로
                                    <br /> 웹서비스의 전체적인 수준을 높이기
                                    위해 매일같이 고민하고 있습니다.
                                </>
                            }
                            color="#7000FF"
                        />
                    </S4CommentFlexEnd>
                    <S4CommentFlexEnd>
                        <S4CommentEnd
                            display="none"
                            flex="flex-end"
                            heading="개발팀은 무엇을 하나요?"
                            name="FrontEnd Developer"
                            p={
                                <>
                                    뎁스 이름처럼 열정이 넘쳐나는 디자이너와
                                    개발자분들을 만나 성장할 수 있는
                                    공간이었습니다. 기획부터 디자인, 서비스
                                    런칭을 위한 과정에서 배움과 성취가 가득한
                                    시간을 보냈습니다. 특히 14주의 기간이 끝나고
                                    서비스 고도화를 진행할 만큼, 함께 만든
                                    서비스에 애정을 갖는 팀원이 생긴다는 점이 큰
                                    매력이라고 생각해요! 11기에서도 함께 성장할
                                    수 있길 기대합니다.
                                </>
                            }
                            color="#7000FF"
                        />
                    </S4CommentFlexEnd>
                    <S4CommentFlexStart>
                        <S4CommentStart
                            display="block"
                            flex="flex-start"
                            heading="디자인팀은 무엇을 하나요?"
                            name="Designer"
                            p={
                                <>
                                    뎁스 이름처럼 열정이 넘쳐나는 디자이너와
                                    개발자분들을 만나 성장할 수 있는
                                    공간이었습니다. 기획부터 디자인, 서비스
                                    런칭을 위한 과정에서 배움과 성취가 가득한
                                    시간을 보냈습니다. 특히 14주의 기간이 끝나고
                                    서비스 고도화를 진행할 만큼, 함께 만든
                                    서비스에 애정을 갖는 팀원이 생긴다는 점이 큰
                                    매력이라고 생각해요! 11기에서도 함께 성장할
                                    수 있길 기대합니다.
                                </>
                            }
                            color="#7000FF"
                        />
                    </S4CommentFlexStart>
                </S4Container>
                <S4EndingTextContainer>
                    <S4EndingTextP>
                        앞으로도
                        <br /> 뎁스의 행보를 응원해주세요
                    </S4EndingTextP>
                    <S4EndingTextLine />
                </S4EndingTextContainer>
            </Section4>
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

const Section4 = styled.section`
    width: 100%;
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const S4Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const S4TextBox = styled.div`
    text-align: center;
`;

const S4Heading = styled.h1`
    font-weight: 900;
    font-size: 40px;
`;

const S4P = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #b2afaf;
`;

const S4CommentFlexStart = styled.div`
    width: 1197px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const S4CommentFlexEnd = styled.div`
    width: 1197px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const S4CommentDivColumn = styled.div<{ flex: string }>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.flex};
    margin-top: 108px;
`;

const S4CommentHeading = styled.h2<{ display: string }>`
    font-weight: 900;
    font-size: 30px;
    display: ${(props) => props.display};
`;

const S4CommentContentDiv = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 15px;
`;

const S4CommentProfileDivStart = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
`;
const S4CommentProfileDivEnd = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
`;

const S4CommentProfileImg = styled.img``;

const S4CommentProfileName = styled.div<{ color: string }>`
    background: ${(props) => props.color};
    border-radius: 46px;
    text-align: center;
    font-weight: 900;
    font-size: 13px;
    margin-top: 20px;
    width: 151px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
`;

const S4CommentTextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 40px;
    background: #d9d9d9;
    border-radius: 35px;
    color: black;
    font-weight: 500;
    font-size: 20px;
`;

const S4CommentText = styled.p`
    em {
        font-weight: 700;
    }
`;

const S4EndingTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const S4EndingTextP = styled.p`
    font-weight: 900;
    font-size: 42px;
`;

const S4EndingTextLine = styled.div`
    border: 2px solid white;
    width: 536px;
    margin-top: 38px;
`;
