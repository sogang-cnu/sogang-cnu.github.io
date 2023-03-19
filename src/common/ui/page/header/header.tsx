import styled from "styled-components";

export const Header = styled(({ className }) => {
  return (
    <header className={className}>
      <HeaderItem label="HOME" active />
      <HeaderItem label="STUDIES" />
      <HeaderItem label="PROJECTS" />
      <HeaderItem label="CONTACT" />
    </header>
  );
})`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;

  height: 10.4rem;
  padding: 3.6rem 0;
`;
