import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, CardMedia } from '@material-ui/core/';
import { Container, Typography, Paper, Box } from "@material-ui/core/";
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


const useStyles = makeStyles({
    logos: {
        height: 80,
    }
});

export default function Skills() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Typography variant="h3" align="center">Skills</Typography>
                <Paper elevation={2}>
                    <CardHeader
                        align="center"
                        title="Front End"
                    />
                    <Box display="flex" flex="row">
                        <img src={html} alt="HTML" className={classes.logos} />
                        <Typography className={classes.title}>
                            HTML
                        </Typography>
                        <img src={css} alt="CSS" className={classes.logos} />
                        <Typography className={classes.title}>
                            CSS
                        </Typography>
                        <img src={bootstrap} alt="Bootstrap" className={classes.logos} />
                        <Typography className={classes.title}>
                            Boostrap
                        </Typography>
                        <img src={materialize} alt="Materialize" className={classes.logos} />
                        <Typography className={classes.title}>
                            Materialize
                        </Typography>
                        <img src={material} alt="Material UI" className={classes.logos} />
                        <Typography className={classes.title}>
                            Material UI
                        </Typography>
                        <img src={javascript} alt="Javascript" className={classes.logos} />
                        <Typography className={classes.title}>
                            JavaScript
                        </Typography>
                        <img src={react} alt="React.js" className={classes.logos} />
                        <Typography className={classes.title}>
                            React.js
                        </Typography>
                        <img src={jquery} alt="JQuery" className={classes.logos} />
                        <Typography className={classes.title}>
                            JQuery
                        </Typography>
                    </Box>
                </Paper>

                <Paper elevation={2}>
                    <CardHeader
                        align="center"
                        title="Back End"
                    />
                    <Box display="flex" flex="row">
                        <img src={node} alt="Node" className={classes.logos} />
                        <Typography className={classes.title}>
                            Node
                        </Typography>
                        <img src={mysql} alt="MySql" className={classes.logos} />
                        <Typography className={classes.title}>
                            MySql
                        </Typography>
                        <img src={mongo} alt="Mongo DB" className={classes.logos} />
                        <Typography className={classes.title}>
                            Mongo DB
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}