import styled, { css } from "styled-components";

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

  height: 10rem;
  padding: 3.6rem 0;
`;

export const HeaderItem = styled(
  ({
    className,
    label,
  }: {
    className?: string;
    label: React.ReactNode;
    active?: boolean;
  }) => {
    return <div className={className}>{label}</div>;
  }
)`
  display: inline-flex;
  align-items: center;

  ${(props) => {
    if (props.active) {
      return css`
        color: white;
        background: rgba(49, 47, 47, 0.86);
      `;
    } else {
      return css`
        color: #312f2f;
        &:hover {
          background: rgba(49, 47, 47, 0.1);
        }
      `;
    }
  }}

  cursor: pointer;
  border-radius: 18px;

  padding: 0rem 1.7rem;
  font-size: 1.1rem;
  font-weight: 800;
`;
