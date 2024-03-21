import styled from "styled-components";
import BlurryBox from "../ui/BlurryBox";
import { NavLink } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 70%;
  gap: 6rem;
  justify-content: space-evenly;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-green-700);
    text-decoration: underline;
  }
`;

const Right = styled.div`
  text-align: center;
`;

export default function LoginPage() {
  return (
    <Container>
      <BlurryBox>
        <Left>
          <div>
            <h1>Login</h1>
            <h4>Please enter your univirsity email and password</h4>
          </div>
          <LoginForm />
        </Left>
      </BlurryBox>
      <BlurryBox>
        <Right>
          <h1>
            Or you can learn more about our{" "}
            <StyledNavLink to="/about">University</StyledNavLink> and its
            <StyledNavLink to="/academics"> programmes</StyledNavLink>
          </h1>
        </Right>
      </BlurryBox>
    </Container>
  );
}
