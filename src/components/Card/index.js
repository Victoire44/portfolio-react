import React from 'react';
import { makeStyles, IconButton, Link, Typography, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const radius = 1
const useStyles = makeStyles(theme => ({
    paper: {
        height: 200,
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
        background: "#252834",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: theme.spacing(radius),
        opacity: 0,
        transition: "all 300ms ease-out",
        "&:hover": {
            opacity: 0.98
        }
    },
    icons: {
        color:"#fff"
    },
    info: {
        padding: theme.spacing(2),
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
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
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