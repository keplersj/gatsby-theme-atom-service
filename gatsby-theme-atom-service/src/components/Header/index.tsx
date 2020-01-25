import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  banner: {
    background: "#efeae1",
    textAlign: "center",
    padding: "2em"
  }
});

const Header = (): React.ReactElement => {
  const classes = useStyles({});
  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      logo: file(name: { eq: "logo" }) {
        publicURL
      }
    }
  `);

  return (
    <Container className={classes.banner} maxWidth="xl">
      <img src={data.logo.publicURL} width="225em" height="225em" alt="" />
      <Typography variant="h2">{data.site.siteMetadata.title}</Typography>
      <Typography variant="h4">{data.site.siteMetadata.description}</Typography>
    </Container>
  );
};

export default Header;
