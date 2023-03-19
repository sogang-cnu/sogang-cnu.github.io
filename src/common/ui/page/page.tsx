import styled from "styled-components";

import { Header } from "./header";
import { Footer } from "./footer";

type TPageProps = {
  className?: string;
  children: React.ReactNode;
};

export const Page = styled(({ className, children }: TPageProps) => {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
})`
  padding: 0px 40rem;
  ${(props) => props.theme.device.xlarge} {
    padding: 0 20rem;
  }
  ${(props) => props.theme.device.large} {
    padding: 0 2.4rem;
  }
`;
