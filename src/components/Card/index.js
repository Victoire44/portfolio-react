import React from 'react';
import { makeStyles, IconButton, Link, Typography, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LockIcon from '@material-ui/icons/Lock';


const radius = 1
const useStyles = makeStyles(theme => ({
    paper: props => ({
        height: 230,
        position: "relative",
        marginBottom: theme.spacing(8),
        borderRadius: theme.spacing(radius),
        "&:hover": {
            cursor: props.locked ? "not-allowed" : "pointer"
        }
    }),
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
    info: {
        padding: theme.spacing(2, 5),

    },
    title: {
        color: "#FA0063",
    },
    description: {
        lineHeight: 1.8
    },
    icons: props => ({
        color: "#fff",
        "&:hover": {
            cursor: props.locked ? "not-allowed" : "pointer",
            color: "black",
        }
    })
}));

export default function MediaCard(props) {
    const classes = useStyles(props);

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
                        <IconButton>{(props.locked ?
                            <LockIcon className={classes.icons} style={{ color: "white" }} fontSize="large" aria-label="github" /> :
                            <GitHubIcon className={classes.icons} fontSize="large" aria-label="github" />)}
                        </IconButton>
                    </Link>
                </div>
            </Link>
        </Paper>
    );
}