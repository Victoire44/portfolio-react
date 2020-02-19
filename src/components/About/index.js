import React from "react";
import { makeStyles, Typography, Box, Container, Divider, Grid } from "@material-ui/core";
import portrait from "./assets/portrait.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        width: "100%",
        padding: theme.spacing(20, 0, 15, 0),
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        "& .MuiGrid-grid-md-8": {
            paddingRight: theme.spacing(10),
            [theme.breakpoints.down(1100)]: {
                paddingRight: theme.spacing(0),
            },
        },
    },
    portrait: {
        height: theme.spacing(50),
        borderRadius: "50%",
        float: "left",
        shapeOutside: "circle(50%)",
        marginRight: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(0),
        },
        [theme.breakpoints.down(670)]: {
            height: theme.spacing(30),
        },
    },
    timeline: {
        borderLeft: "2px solid grey",
        padding: theme.spacing(1.4, 10),
        [theme.breakpoints.down(1100)]: {
            display: "none"
        }
    },
    timelineItem: {
        lineHeight: 2,
        position: "relative",
        "&:nth-child(-n+2)": {
            paddingBottom: theme.spacing(8),
        }
    },
    date: {
        paddingBottom: theme.spacing(3),
        "&:first-child": {
            fontWeight: "bold",
            position: "relative",
            fontSize: theme.spacing(2.7),
            paddingTop: 0,
        },
        "&:before": {
            content: "''",
            display: "block",
            width: theme.spacing(2),
            height: theme.spacing(2),
            borderRadius: "50%",
            position: "absolute",
            top: theme.spacing(0.4),
            left: theme.spacing(-11.6),
            background: "white",
            border: "2px solid grey"
        },
    }
}))

export default function About() {
    const classes = useStyles();

    return (
        <div id="about" className={classes.root}>
            <Container maxWidth="md">
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000"> Hello, I'm Victoire</Typography>
                    <Divider />
                </Box>
                <Grid container>
                    <Grid item md={8} >
                        <img
                            src={portrait}
                            className={classes.portrait}
                            alt="portrait"
                        />
                        <Typography paragraph align="justify" className={classes.description}>
                            <Box lineHeight={2}>
                                I'm an ambitious Web Developer living in San Francisco.
                                Certified Full-Stack Web Developer at UC Berkeley, I am equipped with the skills needed to create effective application from creation to execution.
                                My goal is to develop powerful products with fast user interface and optimized performance while getting an attractive UI/UX interfaces.
                             </Box>
                            <Box lineHeight={2}>
                                My background in Art History makes me think creatively with an artistic outlook. I think of
                                    the interface like a painting where I seek to create harmony and a good balance between the
                                    color and components. My specialities are React.js and material UI to get a clean and modern design.
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <div className={classes.timeline}>
                            <div className={classes.timelineItem}>
                                <Typography className={classes.date} > May 2019 - August 2019 </Typography>
                                <Typography variant="h6"> UC Berkley Extension </Typography>
                                <Typography variant="p"> Full Stack Web Development Coding</Typography>
                                <Typography variant="body2"> San Francisco, California </Typography>

                            </div>
                            <div className={classes.timelineItem}>
                                <Typography className={classes.date}> 2011 – 2013 </Typography>
                                <Typography variant="h6"> Paris-Sorbonne University</Typography>
                                <Typography variant="p">Art History Master</Typography>
                                <Typography variant="body2"> Paris, France</Typography>

                            </div>
                            <div className={classes.timelineItem}>
                                <Typography className={classes.date}> 2008 – 2011 </Typography>
                                <Typography variant="h6"> Nantes University </Typography>
                                <Typography variant="hp"> Art History Bachelor</Typography>
                                <Typography variant="body2"> Nantes, France </Typography>

                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

