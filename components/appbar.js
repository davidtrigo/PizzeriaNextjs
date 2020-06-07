import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import User from './user'
import Search from './search'
import Drawer from './drawer'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));
export default function appBar() {
    const classes = useStyles()
    return (<div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    
                    <MenuIcon />
                     
                </IconButton>
              
                Pizzeria
                <Search></Search>
                <User></User>
          
            </Toolbar>
        </AppBar>
    </div>
    )
}