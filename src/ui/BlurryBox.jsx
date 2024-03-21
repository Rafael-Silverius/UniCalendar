import styled from "styled-components";

const StyledBox = styled.div`
  background-color: rgba(0, 0, 0, 0.575);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(2px);
  color: var(--color-grey-0);
  width: 100%;
  padding: 1.2rem;
`;

export default function BlurryBox({ children }) {
  return <StyledBox>{children}</StyledBox>;
}
