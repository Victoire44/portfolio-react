import React from "react";
import { Container, makeStyles, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Parallax } from "react-parallax";
import SocialNetwork from "../SocialNetwork";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles(theme => ({

    appbar: {
        background: "#252834"
    },
    menu: {
        flexGrow: 1,
    },
    menuItem: {
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "#FA0063",
            cursor: "pointer"
        }
    },
    logo: {
        height: theme.spacing(9),
        fill: "#fff",
        "&:hover": {
            fill: "#FA0063",
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
        textAlign: "center"
    },
    header: {
        background: "#252834",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
    },
    "@global": {
        ".MuiToolbar-root": {
            [theme.breakpoints.down(680)]: {
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(2)
            }
        }
    },
    networks: {
        // background: "red"
        [theme.breakpoints.down(680)]: {
            display: "none"
        }
    }
}))


export default function Header() {
    const props = { color: 'white' };
    const classes = useStyles(props);


    return (
        <div id="header">
            <AppBar className={classes.appbar}>
                <Container maxWidth="md">
                    <Toolbar className={classes.toolbar}>
                        <Link
                            to="header"
                            smooth={true}
                            spy={true}
                            duration={600}
                        >
                            <svg viewBox="0 0 100 100" className={classes.logo}>
                                <text x="10" y="77" fontFamily="Arial" fontSize="73">V</text>
                                <text x="46" y="77" fontFamily="Arial" fontSize="73">B</text>
                            </svg>
                        </Link>
                        <Typography className={classes.menu}>
                            <Link
                                to="about"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={classes.menuItem}
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
                                className={classes.menuItem}
                            >
                                SKILLS
                            </Link>
                            <Link
                                to="projects"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                className={classes.menuItem}
                                underline="none">
                                PROJECTS</Link>
                            <Link
                                to="contact"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                className={classes.menuItem}
                                underline="none">
                                CONTACT</Link>
                        </Typography>
                        <SocialNetwork className={classes.networks} />
                    </Toolbar>
                </Container>
            </AppBar>

            <Parallax
                bgImage={require('./assets/parallax.jpeg')}
                bgImageAlt="background"
                strength={300}
            >
                <div className={classes.parallax}>
                    <Typography variant="h1" className={classes.name} data-aos="fade-right" data-aos-duration="1500">Victoire Baron</Typography>
                    <Typography className={classes.title} variant="h3" data-aos="fade-left" data-aos-duration="1500"> Web Developer</Typography>
                </div>
            </Parallax>
        </div>
    );
}