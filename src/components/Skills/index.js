import React from "react";
import { makeStyles, CardHeader, Container, Typography, Paper, Box, Divider, Grid } from "@material-ui/core/";
import html from "./assets/html.svg";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
import materialize from "./assets/materialize.png";
import material from "./assets/material.png";
import javascript from "./assets/js.png";
import react from "./assets/react.png";
import jquery from "./assets/jquery.png";
import node from "./assets/node.png";
import mysql from "./assets/mysql.png";
import mongo from "./assets/mongodb.png";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        width: "100%",
        padding: theme.spacing(20, 0, 15, 0),
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#fafafa",
        "& .MuiGrid-item":{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(10)
        }
    },
    logos: {
        height: 65,
    },
    title: {
        fontWeight:"bold"
    }
}));


export default function Skills() {
    const classes = useStyles();

    return (
        <div id="skills" className={classes.root}>
            <Container style={{ width: "1100px" }}>
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Skills</Typography>
                    <Divider />
                </Box>
                <Paper elevation={1} className={classes.paper} >
                    <CardHeader
                        align="center"
                        title="Front End Web Developer"
                    />
                    <Grid container>
                        <Grid item xs={3}>
                            <img src={html} alt="HTML" className={classes.logos} />
                            <Typography className={classes.title}>HTML</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={css} alt="CSS" className={classes.logos} />
                            <Typography className={classes.title}>CSS</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={bootstrap} alt="Bootstrap" className={classes.logos} />
                            <Typography className={classes.title}>Boostrap</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={materialize} alt="Materialize" className={classes.logos} />
                            <Typography className={classes.title}>Materialize</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={material} alt="Material UI" className={classes.logos} />
                            <Typography className={classes.title}>Material UI</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={javascript} alt="Javascript" className={classes.logos} />
                            <Typography className={classes.title}>JavaScript</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={react} alt="React.js" className={classes.logos} />
                            <Typography className={classes.title}>React.js</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={jquery} alt="JQuery" className={classes.logos} />
                            <Typography className={classes.title}>JQuery</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={node} alt="Node" className={classes.logos} />
                            <Typography className={classes.title}>Node</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={mysql} alt="MySql" className={classes.logos} />
                            <Typography className={classes.title}>MySql</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <img src={mongo} alt="Mongo DB" className={classes.logos} />
                            <Typography className={classes.title}>Mongo DB</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}
