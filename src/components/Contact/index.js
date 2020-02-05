import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider, Grid } from "@material-ui/core";
import SocialNetwork from "../SocialNetwork";

const useStyles = makeStyles({
    root: {
        background: "#19232f",
        height: "500px",
        paddingTop: "50px",
        "& .MuiDivider-root": {
            background: "white"
        }
    },
    footer: {
        background: "#252834",
        color: "white",
        display: "flex",
        justifyContent: "center",
    },
});

export default function Contact() {
    const classes = useStyles();

    return (
        <div id="contact">
            <AppBar position="static" className={classes.root}>
                <Container style={{ width: "1100px" }}>
                    <Grid container >
                        <Grid item md={12}>
                            <Box mb={15}>
                                <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Contact</Typography>
                                <Divider />
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h5" >Phone Number</Typography>
                            <Typography>+1(415)416-0428</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h5">Email</Typography>
                            <Typography>victoirebaron@hotmail.fr</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h5">Social Network </Typography>
                            <SocialNetwork />
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <Toolbar className={classes.footer} >
                <Typography>©2020 Victoire Baron</Typography>
            </Toolbar>
        </div >
    )
}