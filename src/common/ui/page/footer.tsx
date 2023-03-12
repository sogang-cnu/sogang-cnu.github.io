import styled from "styled-components";

import CnuLogo from "common/assets/cnu-logo.svg";

const CnuLogoImage = styled.img.attrs({ src: CnuLogo })``;

export const Footer = styled(({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <CnuLogoImage />
      <br />
      서강대학교 컴퓨터공학과 웹 개발 학회
      <br />
      <br />
      04107 서울시 마포구 백범로 35 (신수동) 서강대학교 리치과학관(R관) 912호 |
      admin@cnu.team
      <br />
      Copyright 2023 © CNU. All Rights Reserved.
    </footer>
  );
})`
  ${CnuLogoImage} {
    margin-left: -1rem;
    margin-bottom: -0.6rem;
    width: 7.2rem;
  }
  width: 100vw;
  line-height: 1.4;

  /* FIXME: Page의 padding 값에 의존하고 있음 */
  margin-left: -10rem;
  padding: 33rem 4rem 3rem 4rem;

  font-size: 0.8rem;
  background: linear-gradient(180deg, rgba(206, 206, 206, 0) 0%, #5d737e 84.9%);
  color: white;
`;
