import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout (props) {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}