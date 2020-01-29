import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import Contact from "../Contact"

const useStyles = makeStyles({
   contact: {
        background: "#19232f",
        height: "115px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "center",
    },
    footer: {
        background: "#252834",
        color: "white",
        display: "flex",
        justifyContent: "center",
    }
});

export default function Footer() {
    const classes = useStyles();

    return (
        <div id="footer">
            <AppBar position="static" className={classes.contact}>
                <Container>
                    <Toolbar className={classes.toolbar}>
                        <Contact />
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar className={classes.footer}>
                <Typography>©2020 Victoire Baron</Typography>
            </Toolbar>
        </div>
    )
}