import styled from "styled-components";

import FaceEmoji from "./beaming_face_with_smiling_eyes.gif";

const FaceEmojiImage = styled.img.attrs({
  src: FaceEmoji,
})``;
const Content = styled.span``;
export const MemberCountSection = styled(
  ({ className }: { className?: string }) => {
    return (
      <div className={className}>
        <FaceEmojiImage />
        <Content>약 100명의 학회원이 활동하고 있어요!</Content>
      </div>
    );
  }
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3.2rem 0px;

  ${FaceEmojiImage} {
    width: 6.4rem;
  }
  ${Content} {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
