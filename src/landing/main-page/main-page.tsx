import styled from "styled-components";

import CnuLogo from "common/assets/cnu-logo.svg";
import { Banner, Page } from "common/ui";
import { GridBanner } from "common/ui/banner/grid-banner";
import { MemberCountSection } from "./member-count-section";

const CnuLogoImage = styled.img.attrs({
  src: CnuLogo,
})``;

const HeroTitle = styled.div``;
const HeroSubTitle = styled.div``;
const Hero = styled(({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <CnuLogoImage />
      <HeroTitle>
        2023 SPRING <br />
        DEV COMMUNITY
      </HeroTitle>
      <HeroSubTitle>서강대학교 컴퓨터공학과 웹 개발 학회</HeroSubTitle>
    </div>
  );
})`
  color: white;
  ${HeroTitle} {
    font-weight: 900;
    font-size: 5rem;
    line-height: 5rem;
  }
  ${HeroSubTitle} {
    font-weight: 700;
    margin-top: 1rem;
    font-size: 1.4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const MainPage = styled(({ className }) => {
  return (
    <Page className={className}>
      <Hero />
      <Banner
        title="여러분의 성장을 지원해드려요 💸"
        content={
          <>
            공부하고 싶은 언어나 프레임워크가 있나요? <br />
            CNU에서는 매달 활성 학회원을 대상으로 <b>개발 도서 및 서버 비용</b>
            을 지원해드려요.
          </>
        }
      />
      <MemberCountSection />
      <Grid>
        <GridBanner
          color="white"
          backgroundColor="#616161"
          emoji="🌙"
          title={
            <>
              Mogako
              <br />
              Tonight?
            </>
          }
          content={
            <>
              혼자 코드를 작성하느라 외로우셨나요?
              <br />
              이젠 <b>선배</b>들과 함께하세요.
              <br />
              매일 밤 <b>선배</b>들은 코드 정령들을 기다리고 있어요.
            </>
          }
        />
        <GridBanner
          color="white"
          backgroundColor="white"
          emoji=""
          title=""
          content=""
        />
        <GridBanner
          color="white"
          backgroundColor="white"
          emoji=""
          title=""
          content=""
        />
        <GridBanner
          color="white"
          backgroundColor="#5671A3"
          emoji="📖"
          title={
            <>
              Study
              <br />
              with us
            </>
          }
          content={
            <>
              어디부터 공부할지 막막하신가요?
              <br />
              선배들이 제시하는 커리큘럼으로 공부를 시작해보세요.
            </>
          }
        />
      </Grid>
    </Page>
  );
})`
  height: auto;
  background: linear-gradient(
    177.55deg,
    #92d2b3 30.57%,
    rgba(250, 243, 62, 0.526042) 80.32%,
    rgba(110, 237, 242, 0) 97.95%
  );

  ${CnuLogoImage} {
    margin-left: -1rem;
    margin-bottom: -0.6rem;
    width: 8rem;
  }

  ${Banner} {
    margin-top: 3.2rem;
  }
  ${Grid} {
    margin-top: 2rem;
    gap: 2.4rem;

    ${GridBanner} {
      &:nth-of-type(1) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 1;
      }
      &:nth-of-type(3) {
        grid-column: 1 / span 2;
      }
      &:nth-of-type(4) {
        grid-column: 3 / span 2;
      }
    }
  }
`;
