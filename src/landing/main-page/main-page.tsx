import styled from "styled-components";

import CnuLogo from "common/assets/cnu-logo.svg";
import { Page } from "common/ui";

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

export const MainPage = styled(({ className }) => {
  return (
    <Page className={className}>
      <Hero />
    </Page>
  );
})`
  height: 100vh;
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
`;
