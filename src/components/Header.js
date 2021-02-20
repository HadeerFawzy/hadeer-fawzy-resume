import React from 'react'
import { makeStyles, Grid, Typography, Box, fade } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import myImg from 'imgs/hadeer.jpg';
import bgPatternImg from 'imgs/bg_3.jpg';


const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: fade(theme.palette.secondary.light, 0.6),
    backgroundImage: `url(${bgPatternImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    backgroundBlendMode: 'color-dodge',
    padding: '2rem 1rem',
    [theme.breakpoints.up('lg')]: {
      padding: '5rem 0',
    }
  },
  infoGrid: {
    textAlign: 'center',
    order: 1,
    [theme.breakpoints.up('lg')]: {
      order: 0
    }
  },
  name: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    textShadow: '0px 3px 2px #00000038',
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(32),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(28),
    }
  },
  jobTitle: {
    color: theme.palette.typography.main,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(26),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(22),
    }
  },
  contactBox: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    borderRadius: '20px',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    backgroundColor: fade(theme.palette.primary.main, 1),
    maxWidth: theme.spacing(50),
    margin: theme.spacing(1, 'auto'),
    boxShadow: '0px 2px 4px 0px rgb(0 0 0 / 29%)',
    '& svg': {
      background: theme.palette.secondary.main,
      padding: theme.spacing(1),
      marginRight: theme.spacing(1),
      borderTopLeftRadius: theme.spacing(2.5),
      borderBottomLeftRadius: theme.spacing(2.5),
    }
  },
  contactText: {
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.pxToRem(18),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(16),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(12),
    },
  },
  imgGrid: {
    order: 0,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      order: 1,
      marginBottom: 0
    }
  },
  imgBox: {
    width: theme.spacing(31.25),
    height: theme.spacing(37.5),
    margin: '0 auto',
    border: `${theme.spacing(2.2)} solid ${theme.palette.primary.main}`,
    boxShadow: '-1px 2px 4px 1px rgb(0 0 0 / 45%)',
    '& img': {
      maxWidth: '101%',
      height: '101%',
      margin: '-2px 0 0 -2px',
      objectFit: 'cover',
    }
  }
}))

const Header = () => {
  const classes = useStyles();

  const contacts = [{
    icon: <PhoneIphoneIcon/>,
    text: '01284849287'
  },{
    icon: <EmailIcon/>,
    text: 'hadeerfawzymahmoud92@gmail.com'
  },{
    icon: <HomeIcon/>,
    text: 'Alexandria, Egypt'
  }]

  return ( 
    <div className="header">
      <Grid container className={classes.headerContainer}>
        <Grid item xs={12} lg={6} className={classes.infoGrid}>
          <Typography component="h1" variant="h1" className={classes.name}>
            Hadeer Fawzy Mahmoud
          </Typography>
          <Typography component="h2" variant="h2" className={classes.jobTitle}>
            UI/Frontend Developer
          </Typography>
          <Box>
            { contacts.map((contact) => (
                <Box key={contact.text} className={classes.contactBox}>
                  {contact.icon}
                  <Typography className={classes.contactText}>
                    {contact.text}
                  </Typography>
                </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.imgGrid}>
          <Box className={classes.imgBox}>
            <img src={myImg}/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
