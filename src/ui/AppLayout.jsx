import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import Row from "./Row";
import img from "../../public/mainImg.jpg";

const Main = styled.main`
  color: var(--color-grey-0);
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(0.5px);
`;

export default function AppLayout() {
  return (
    <Row>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </Row>
  );
}
