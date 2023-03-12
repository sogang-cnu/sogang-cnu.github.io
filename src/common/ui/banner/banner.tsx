import styled from "styled-components";

type TBannerProps = {
  className?: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

const Title = styled.span``;
const Content = styled.span``;
export const Banner = styled(({ className, title, content }: TBannerProps) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </div>
  );
})`
  width: 100%;
  background: white;
  color: #5671a3;

  padding: 2.1rem 2rem 1.4rem 2rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Title} {
    font-weight: 800;
    line-height: 8px;
    font-size: 1.4rem;
  }
  ${Content} {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.2;
  }
`;
