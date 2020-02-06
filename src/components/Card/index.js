import React from 'react';
import { makeStyles, IconButton, Link, Typography, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const radius = 1
const useStyles = makeStyles(theme => ({
    paper: {
        height: 230,
        position: "relative",
        marginBottom: theme.spacing(8),
        borderRadius: theme.spacing(radius)
    },
    media: {
        height: "100%",
        borderRadius: theme.spacing(radius)
    },
    content: {
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#19232f",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: theme.spacing(radius),
        opacity: 0,
        transition: "all 300ms ease-out",
        "&:hover": {
            opacity: 0.95,
           "& .makeStyles-media-246": {
                filter: "grayscale(50%)"
            }
           }
    },
    icons: {
        color: "#fff",
        "&:hover": {
            color: "black",
        }
    },
    info: {
        padding: theme.spacing(2, 5),

    },
    title: {
        color: "#FA0063",
    },
    description: {
        lineHeight: 1.8
    }
}));

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={8}>
            <img
                className={classes.media}
                src={props.image}
                alt={props.alt}
            />
            <Link href={props.heroku} color="inherit" underline="none" target="_blank" rel="noopener" className={classes.content} align="center">
                <div className={classes.info}>
                    <Typography gutterBottom variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography>{props.tools}</Typography>
                    <Typography variant="body2" component="p" className={classes.description}>
                        {props.text}
                    </Typography>
                    <Link href={props.github} target="_blank" rel="noopener">
                        <IconButton><GitHubIcon className={classes.icons} fontSize="large" aria-label="github" /></IconButton>
                    </Link>
                </div>
            </Link>
        </Paper>
    );
}