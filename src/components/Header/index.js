import React from "react";
import { makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax } from "react-parallax";
import Container from "@material-ui/core/Container";
import SocialNetwork from "../SocialNetwork";
import { Link, animateScroll as scroll } from "react-scroll";

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
                        <Typography className={classes.menu}>
                            <Link
                                to="header"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={classes.hover}
                            >
                                VB
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={`${classes.menuItem} ${classes.hover}`}
                            >
                                ABOUT
                            </Link>
                            <Link
                                to="skills"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={`${classes.menuItem} ${classes.hover}`}
                            >
                                SKILLS
                            </Link>
                            <Link
                                to="projects"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                className={`${classes.menuItem} ${classes.hover}`}
                                underline="none">
                                PROJECTS</Link>
                                <Link
                                to="contact"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                className={`${classes.menuItem} ${classes.hover}`}
                                underline="none">
                                CONTACT</Link>
                        </Typography>
                        <SocialNetwork />
                    </Toolbar>
                </Container>
            </AppBar>

            <Parallax
                className={classes.parallax}
                bgImage={require('./assets/parallax.jpeg')}
                bgImageAlt="background"
                strength={300}
            >
                <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Victoire Baron</Typography>
                <Typography className={classes.title} variant="h3" data-aos="fade-left" data-aos-duration="1500"> Web Developer</Typography>
            </Parallax>
        </div>
    );
}