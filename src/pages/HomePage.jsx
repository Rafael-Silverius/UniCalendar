import styled from "styled-components";
import BlurryBox from "../ui/BlurryBox";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  width: 50%;
`;
const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  text-align: center;
  padding: 4.8rem 4rem;
`;

const Header = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  line-height: 4rem;
`;

const Green = styled.span`
  color: var(--color-green-700);
`;

export default function HomePage() {
  return (
    <Main>
      <BlurryBox>
        <Styleddiv>
          <Header>
            Welcome <br />
            to our University <Green>Portal</Green>
          </Header>
          <div>
            <h3>To acess timetable and more features you have to</h3>
            <Button sizes="large">
              <NavLink to="/login">Sign In</NavLink>
            </Button>
          </div>
        </Styleddiv>
      </BlurryBox>
    </Main>
  );
}
