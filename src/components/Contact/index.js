import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider, Link } from "@material-ui/core";
import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#191919",
        paddingTop: theme.spacing(10),
        "@media (max-width: 1280px)": {
            padding: theme.spacing(10, 10, 0, 10),
        },
        "& .MuiDivider-root": {
            background: "#fff"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#fff"
        }
    },
    networks: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width: 600px)": {
            justifyContent: "flex-start"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            position: "relative",
            "&:after": {
                content: "''",
                height: "1px",
                borderRadius: "4px",
                position: "absolute",
                width: "100%",
                background: "white",
                bottom: -5,
                left: 0,
                transform: "scale(1)",
                transition: "transform .4s",
            },
            "&:hover:after": {
                transform: "scale(0)",
            },
        }
    },
    networksItem: {
        marginLeft: theme.spacing(4),
        "@media (max-width: 600px)": {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(4)
        }
    },
    footer: {
        background: "#191919",
        color: "#fff",
        display: "flex",
        justifyContent: "center"
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div id="contact">
            <AppBar position="static" className={classes.root}>
                <Container maxWidth="lg">
                    <Title>
                        <Typography>Keep in touch</Typography>
                    </Title>
                    <Box className={classes.contact}>
                        <Typography variant="h6">Tel: +1 415-416-0428</Typography>
                        <Link href="mailto:me@victoirebaron.com" target="_blank">
                            <Typography variant="h6">Email: me(at)victoirebaron.com</Typography>
                        </Link>
                        <Box mt={5} className={classes.networks}>
                            <Link href="https://www.linkedin.com/in/victoirebaron/?locale=en_US" target="_blank" className={classes.networksItem}>
                                <Typography variant="h6">LinkedIn</Typography>
                            </Link>
                            <Link href="https://github.com/Victoire44" target="_blank" className={classes.networksItem}>
                                <Typography variant="h6">Github</Typography>
                            </Link>
                            <Link href="https://github.com/Victoire44" target="_blank" className={classes.networksItem}>
                                <Typography variant="h6">Resume</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box pt={20} pb={5} className={classes.footer} >
                        <Typography>© 2020 Victoire Baron</Typography>
                    </Box>
                </Container>
            </AppBar>
        </div >
    )
}