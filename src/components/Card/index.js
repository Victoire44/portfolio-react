import React from 'react';
import { makeStyles, Card, CardMedia, CardContent, CardActions, CardActionArea, IconButton, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
    card: {
        width: 345,
        marginBottom: theme.spacing(8)
    },
    media: {
        height: 200,
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
           <Link href={props.heroku} color="inherit" underline="none" target="_blank" rel="noopener"> 
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
            </Link>
            <CardActions>
                <Link href={props.github} target="_blank" rel="noopener">
                    <IconButton><GitHubIcon className={classes.icons} fontSize="large" aria-label="github" /></IconButton>
                </Link>
            </CardActions>
        </Card>
    );
}