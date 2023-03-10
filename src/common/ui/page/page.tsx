import styled from "styled-components";

import { Header } from "./header";

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
      </div>
    );
  }
)`
  padding: 0 20rem;
`;
