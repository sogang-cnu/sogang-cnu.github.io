import styled from "styled-components";

import CnuLogo from "common/assets/cnu-logo-original.svg";

const CnuLogoImage = styled.img.attrs({ src: CnuLogo })``;

export const Footer = styled(({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <CnuLogoImage />
      <br />
      <p>서강대학교 컴퓨터공학과 웹 개발 학회</p>
      <br />
      <p>
        04107 서울시 마포구 백범로 35 (신수동) 서강대학교 리치과학관(R관) 912호
        | admin@cnu.team
      </p>
      <p>© CNU. All Rights Reserved.</p>
    </footer>
  );
})`
  ${CnuLogoImage} {
    margin-bottom: -0.2rem;
    width: 9.2rem;
  }

  width: 100vw;
  line-height: 1.4;

  /* FIXME: Page의 padding 값에 의존하고 있음 */
  @media (max-width: 1340px) {
    margin-left: -20rem;
  }
  @media (max-width: 950px) {
    margin-left: -2.4rem;
    padding: 33rem 2.4rem 3rem;
  }
  margin-left: -40rem;
  padding: 33rem 4rem 3rem 4rem;

  font-size: 1.2rem;
  color: #5d737e;

  /* background: linear-gradient(180deg, rgba(206, 206, 206, 0) 0%, #5d737e 84.9%); */
  /* color: white; */
`;
