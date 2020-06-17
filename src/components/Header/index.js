import React, { useState, useEffect, useRef } from "react";
import { Container, makeStyles, Typography, Toolbar } from "@material-ui/core";
import SocialNetwork from "../SocialNetwork";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Frame } from "framer"

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 0,
        paddingLeft: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    menuItem: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        fontFamily: "'Poiret One', cursive",
        fontSize: "20px",
        textTransform: "uppercase",
        fontWeight: 600,
        "&:hover": {
            color: "#bdbdbd",
            cursor: "pointer"
        }
    },
    logo: {
        height: theme.spacing(9),
        fill: "#000",
        "&:hover": {
            fill: "#bdbdbd",
            cursor: "pointer"
        }
    },
    description: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& .MuiTypography-root": {
            fontFamily: "'Poiret One', cursive",
            fontSize: theme.spacing(10),
            fontWeight: 800
        }
    },
    navbar: props => ({
        width: "100%",
        zIndex: 100,
        position: props.isSticky ? "fixed" : "absolute",
        bottom: props.isSticky ? "" : "15%",
        top: props.isSticky ? 0 : "",
        display: "block",
        justifyContent: "center"
    }),
    networks: {
        position: "absolute",
        top: "55px",
        right: "200px",
    }
}))


export default function Header() {
    const [isSticky, setSticky] = useState(false);
    const classes = useStyles({ isSticky: isSticky });
    const menuRef = useRef(null)

    const description = {
        visible: { opacity: 1, y: -40 },
        hidden: { opacity: 0, y: 0 }
    }
    const navbar = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 }
    }

    const handleScroll = () => {
        if (menuRef.current) {
            setSticky(menuRef.current.getBoundingClientRect().top <= 0);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <div id="header">
            <Container maxWidth="md">
                <SocialNetwork className={classes.networks} />
            </Container>
            <Container maxWidth="sm" >
                <motion.div initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7 }}
                    variants={description}
                    className={classes.description}>
                    <Typography>I'm Victoire Baron. </Typography>
                    <Typography>Front End Developer based in San Francisco.</Typography>
                    <Typography>Currently building user interface a photographer/moviemaker website.</Typography>
                </motion.div>
            </Container >
            <div ref={menuRef} className={classes.navbar}>
                <Frame
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7 }}
                    variants={navbar}
                    center={"x"}
                    background={"#fff"}
                    width={"auto"}
                    height={60}
                    // zIndex={100}
                >
                    <Toolbar className={classes.toolbar}>
                        {/* <Link
                            to="header"
                            smooth={true}
                            spy={true}
                            duration={600}
                        >
                            <svg viewBox="0 0 100 100" className={classes.logo}>
                                <text x="10" y="77" fontFamily="Arial" fontSize="73">V</text>
                                <text x="46" y="77" fontFamily="Arial" fontSize="73">B</text>
                            </svg>
                        </Link> */}
                        <Typography className={classes.menu}>
                            <Link
                                to="works"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                className={classes.menuItem}
                                underline="none">
                                Works</Link>
                            <Link
                                to="about"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                underline="none"
                                className={classes.menuItem}
                            >
                                About
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
                                Skills
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                spy={true}
                                duration={600}
                                variant="h6"
                                className={classes.menuItem}
                                underline="none">
                                Contact</Link>
                        </Typography>
                    </Toolbar>
                </Frame>
            </div>
        </div >
    );
}


{/* <Parallax
                bgImage={require('./assets/parallax.jpeg')}
                bgImageAlt="background"
                strength={300}
            > */}
{/* </Parallax> */ }
{/* <div style={{
                position: "absolute",
                left: "0%",
                top: "auto",
                right: "0%",
                bottom: "2%",
                height: "50%"
            }}> */}
{/* <Link
                    to="works"
                    smooth={true}
                    spy={true}
                    duration={1000}>
                    <ExpandMoreIcon color="primary" style={{ position: "absolute", bottom: 0, right: "50%", fontSize: 40, height: "80px", color: "#000" }} />
                </Link> */}
{/* <AppBar className={classes.appbar}> */ }

