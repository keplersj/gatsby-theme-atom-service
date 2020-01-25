import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#66595c"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

interface NavQuery {
  site: {
    siteMetadata: {
      title: string;
      nav: {
        name: string;
        url: string;
      }[];
    };
  };
  allProvidersYaml: {
    edges: {
      node: {
        id: string;
        title: string;
        modal: string;
      };
    }[];
  };
}

const Nav = (): React.ReactElement => {
  const classes = useStyles({});
  const [state, setState] = React.useState({
    drawerOpen: false
  });
  const data = useStaticQuery<NavQuery>(graphql`
    query NavQuery {
      site {
        siteMetadata {
          title
          nav {
            name
            url
          }
        }
      }
      allProvidersYaml {
        edges {
          node {
            id
            title
            modal
          }
        }
      }
    }
  `);

  // Disabling this lint rule for now, it does raise a good point for future refactoring though.
  // TODO: refactor
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ): void => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({
      ...state,
      drawerOpen: open
    });
  };

  return (
    <>
      <nav className={classes.root}>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {data.site.siteMetadata.title}
            </Typography>
            <Hidden only={["xs", "sm"]}>
              {data.site.siteMetadata.nav.map(link => (
                <Button key={link.name} color="inherit" href={link.url}>
                  {link.name}
                </Button>
              ))}
            </Hidden>
          </Toolbar>
        </AppBar>
      </nav>
      <Drawer open={state.drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          data-testid="drawer-content"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {data.site.siteMetadata.nav.map(link => (
              <ListItem button component="a" key={link.name} href={link.url}>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {data.allProvidersYaml.edges.map(({ node }) => (
              <ListItem
                button
                component="a"
                key={node.id}
                href={`#${node.modal}`}
              >
                <ListItemText primary={node.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
