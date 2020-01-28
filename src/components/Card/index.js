import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, CardActionArea } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    card: {
        width: 345,
    },
    media: {
        height: 200,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <IconButton><GitHubIcon className={classes.icons} fontSize="large" aria-label="github" /></IconButton>
                </a>
            </CardActions>
        </Card>
    );
}