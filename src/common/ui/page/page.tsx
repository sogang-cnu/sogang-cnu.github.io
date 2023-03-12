import styled from "styled-components";

import { Header } from "./header";
import { Footer } from "./footer";

export const Page = styled(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div className={className}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
)`
  padding: 0 10rem;
`;
