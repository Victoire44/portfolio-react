import React from "react";
import { makeStyles, IconButton, Link } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";

const useStyles = makeStyles(theme => ({
    iconButton: {
        padding: theme.spacing(1)
    },
    icons: {
        fill: "#000",
    },
}));


export default function SocialNetwork(props) {
    const classes = useStyles(props);
    const socialNetwork = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
    return (
        <motion.div className={props.className}
            variants={socialNetwork}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 1 }}
        >
            <Link href="https://github.com/Victoire44" target="_blank" >
                <IconButton className={classes.iconButton}>
                    <GitHubIcon className={classes.icons} fontSize="large" aria-label="github" />
                </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/victoirebaron/?locale=en_US" target="_blank">
                <IconButton className={classes.iconButton}>
                    <LinkedInIcon className={classes.icons} fontSize="large" aria-label="linkedin" />
                </IconButton>
            </Link>
            <Link href="mailto:me@victoirebaron.com" target="_blank">
                <IconButton className={classes.iconButton}>
                    <EmailIcon className={classes.icons} fontSize="large" aria-label="email" />
                </IconButton>
            </Link>
        </motion.div>
    );
};
