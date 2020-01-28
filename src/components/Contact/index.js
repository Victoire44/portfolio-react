import React from "react";
import { makeStyles, IconButton, Box, Link } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
    padding: {
        padding: theme.spacing(1)
    },
    icons: {
        fill: "white",
    },
}));


export default function Icons(props) {
    const classes = useStyles(props);

    return (
        <Box>
            <Link href="https://github.com/Victoire44" target="_blank">
                <IconButton className={classes.padding}>
                    <GitHubIcon className={classes.icons} fontSize="large" aria-label="github" />
                </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/victoirebaron/?locale=en_US" target="_blank">
                <IconButton className={classes.padding}>
                    <LinkedInIcon className={classes.icons} fontSize="large" aria-label="linkedin" />
                </IconButton>
            </Link>
            <Link href="mailto:victoirebaron@hotmail.fr" target="_blank" >
                <IconButton className={classes.padding}>
                    <EmailIcon className={classes.icons} fontSize="large" aria-label="email" />
                </IconButton>
            </Link>
        </Box>
    )
}
