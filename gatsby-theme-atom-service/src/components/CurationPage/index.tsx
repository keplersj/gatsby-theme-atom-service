import * as React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "typeface-roboto";
import Consumers from "../Consumers";
import Footer from "../Footer";
import Head from "../Head";
import Header from "../Header";
import Nav from "../Nav";
import Providers from "../Providers";

const useStyles = makeStyles({
  content: {
    padding: "1em"
  }
});

const Index = (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <>
      <Head />
      <CssBaseline />
      <Nav />
      <Header />
      <Container component="main" className={classes.content}>
        <Consumers />
        <Providers />
      </Container>
      <Footer />
    </>
  );
};

export default Index;
