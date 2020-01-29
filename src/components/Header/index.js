import React from "react";
import { makeStyles, Typography, Box, AppBar, Toolbar} from "@material-ui/core";
import { Parallax } from "react-parallax";
import Container from "@material-ui/core/Container";
import Contact from "../Contact";
import { Link, animateScroll as scroll } from 'react-scroll'
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    appbar: {
        background: "#252834",
    },
    menu: {
        flexGrow: 1,
    },
    menuItem: {
        marginLeft: theme.spacing(5),
    },
    hover: {
        '&:hover': {
            color: "#FA0063",
            cursor: "pointer"
        }
    },
    name: {
        color: props => props.color,
        fontWeight: 400,
    },
    title: {
        color: "#FA0063",
    },
    parallax: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    header: {
        background: "#252834",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    }
}))


export default function Header() {
    const props = { color: 'white' };
    const classes = useStyles(props);

    return (
        <div id="header">
            <AppBar className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Box className={classes.menu}>
                            <Link to="#">
                                    <HomeIcon aria-label="home" style={{color:"white"}}/>
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                color="inherit"
                                underline="none"
                                className={`${classes.menuItem} ${classes.hover}`}>
                                ABOUT
                            </Link>
                            <Link
                                to="skills"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                color="inherit"
                                underline="none"
                                className={`${classes.menuItem} ${classes.hover}`}>
                                SKILLS
                            </Link>
                            <Link
                                to="portfolio"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                color="inherit"
                                className={`${classes.menuItem} ${classes.hover}`}
                                underline="none">
                                PORTFOLIO</Link>
                            <Link
                                to="projects_team"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                color="inherit"
                                className={`${classes.menuItem} ${classes.hover}`}
                                underline="none">
                                TEAM PROJECTS</Link>
                        </Box>
                        <Contact />
                    </Toolbar>
                </Container>
            </AppBar>

            <Parallax
                className={classes.parallax}
                bgImage={require('./assets/background.jpg')}
                bgImageAlt="background"
                strength={200}
            >
                <Typography variant="h2" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Victoire Baron</Typography>
                <Typography className={classes.title} variant="h4" data-aos="fade-left" data-aos-duration="1500"> Web Developer</Typography>
            </Parallax>
        </div>
    )
}