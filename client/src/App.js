import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { Fragment }  from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';

import AboutRoutes from './routes/about/index';
import HomeRoutes from './routes/home/index';
import ResearchRoutes from './routes/research/index';
import ProjectRoutes from './routes/project/index';
import EducationRoutes from './routes/education/index';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Matheus Mota
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
            
            <Avatar alt="Matheus Mota" src="" className={classes.large} />
            
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>

          <Link to="/" style={{color:'black', textDecoration:'none'}} >
            <ListItem button key='Home'>
              <ListItemIcon><HomeIcon /></ListItemIcon>  
              <ListItemText primary='Home' />
          </ListItem>
          </Link>

          <Link to="/about" style={{color:'black', textDecoration:'none'}} >
            <ListItem button key='About'>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
          </Link>

          <Link to="education" style={{color:'black', textDecoration:'none'}} >
            <ListItem button key='Education'>
              <ListItemIcon><CastForEducationIcon /></ListItemIcon>
              <ListItemText primary='Education' />
            </ListItem>
          </Link>

          <Link to="research" style={{color:'black', textDecoration:'none'}} >
            <ListItem button key='Research'>
              <ListItemIcon><ImageSearchIcon /></ListItemIcon>
              <ListItemText primary='Research' />
            </ListItem>
          </Link>

          <Link to="project" style={{color:'black', textDecoration:'none'}} >
            <ListItem button key='Projects'>
              <ListItemIcon><AccountTreeIcon /></ListItemIcon>
              <ListItemText primary='Projects' />
            </ListItem>
          </Link>
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Fragment>
          
            
            <HomeRoutes />
            <AboutRoutes />
            <EducationRoutes />
            <ProjectRoutes />
            <ResearchRoutes />
            
          
        </Fragment>
      </main>
    </div>
    </Router>
  );
}