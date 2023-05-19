/** @format */
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { MainNavigation } from "../components/MainNavigation/MainNavigation";


export const SharedLayout = () => {
  return (
    <Container>
      <MainNavigation />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};
