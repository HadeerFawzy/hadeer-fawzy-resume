import React from 'react'
import { makeStyles, Box, MenuItem, Container, Typography, Hidden, Drawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  menuRoot: {
    background: theme.palette.common.white,
    boxShadow: '0px 1px 4px 1px rgb(0 0 0 / 20%)',
    margin: theme.spacing(0),
    height: theme.spacing(10),
    position: 'sticky',
    top: '0',
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 'auto', 4),
    }
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      zIndex: '10',
    }
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    }
  },
  homeItem: {
    padding: theme.spacing(0.75, 1.25),
    border: `2px solid`,
    borderColor: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      background: 'transparent',
      '& h1': {
        color: theme.palette.secondary.main,
      }
    }
  },
  homeLink: {
    display: 'flex',
  },
  hLetter: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
    lineHeight: theme.spacing(5),
    transition: 'all 0.3s ease-in-out',
  },
  menuItemRoot: {
    height: '100%',
    fontFamily: "'Lobster Two', cursive",
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.primary.main,
    borderBottom: `2px solid transparent`,
    transition: 'all 0.3s ease-in-out',
    '&:hover, &.active': {
      color: theme.palette.secondary.main,
      [theme.breakpoints.up('lg')]: {
        borderColor: theme.palette.secondary.main,
      }
    }
  },
  itemIcon: {
    marginRight: theme.spacing(0.75),
    color: theme.palette.secondary.main,
  },
  // Mobile Menu
  burgerMenuIcon: {
    color: theme.palette.primary.main,
    width: theme.spacing(8.5),
    height: theme.spacing(8.5),
    cursor: 'pointer'
  },
  drawerPaper: {
    top: theme.spacing(10)
  },
  drawerRoot: {
    zIndex: '5',
  }
}))

const Menu = ({ menuItems, activeSection, handleClickMenuItem }) => {
  const classes = useStyles();

  const [toggleDrawer, setToggleDrawer] = React.useState(false);

  const MenuItems = () => {
    return (
      <Box className={classes.menuBox}>
      {menuItems.map((item, index) => (
        <MenuItem classes={{ root: classes.menuItemRoot }} 
                  key={`${item.id}-${index}`}
                  className={(activeSection == item.id) ? 'active' : ''}
                  onClick={() => handleClickMenuItem(item.id)}>
          {/* {item.icon} */}
          <a  className={`${classes.itemLink}`}> 
            {item.name}
          </a>
        </MenuItem>
      ))}
      </Box>
    )
  }

  return ( 
    <Box className={classes.menuRoot} display="flex">
      <Container className={classes.menuContainer}>
        <MenuItem className={`${classes.homeItem}`}>
          <a  className={classes.homeLink}>
            {/* <img src={logo}/> */}
            <Typography variant='h1' component='h1' className={classes.hLetter}>
                H
            </Typography>
          </a>
        </MenuItem>
        <Hidden lgUp>
          <MenuIcon className={classes.burgerMenuIcon}
                    onClick={() => setToggleDrawer(!toggleDrawer)}/>
        </Hidden>
        <Hidden mdDown>
          <MenuItems/>
        </Hidden>
      </Container>
      <Hidden lgUp>
        <Drawer className={classes.drawer}
                variant="persistent"
                anchor="top"
                open={toggleDrawer}
                classes={{
                  paper: classes.drawerPaper,
                  root: classes.drawerRoot
                }} >
          <Divider/>
          <MenuItems/>
        </Drawer>
      </Hidden>
    </Box>
  );
}

Menu.propTypes = {
  menuItems: PropTypes.array,
  handleClickMenuItem: PropTypes.func,
  activeSection: PropTypes.string,
};

export default Menu;
