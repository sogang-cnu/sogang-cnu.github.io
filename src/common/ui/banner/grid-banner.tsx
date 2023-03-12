import styled, { css } from "styled-components";

type TGridBannerProps = {
  className?: string;
  title: React.ReactNode;
  content: React.ReactNode;
  emoji: React.ReactNode;
  color: string;
  backgroundColor: string;
};

const Title = styled.span``;
const Content = styled.span``;
const Emoji = styled.span``;
export const GridBanner = styled(
  ({ className, title, content, emoji }: TGridBannerProps) => {
    return (
      <div className={className}>
        <Title>{title}</Title>
        <br />
        <Content>{content}</Content>
        {emoji && <Emoji>{emoji}</Emoji>}
      </div>
    );
  }
)`
  ${(props) =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;
  border-radius: 2rem;

  ${Title} {
    font-weight: 800;
    font-size: 4rem;
  }
  ${Content} {
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 400;
  }
  ${Emoji} {
    position: absolute;
    top: 3rem;
    right: 3rem;
    font-size: 2.8rem;
  }
`;
