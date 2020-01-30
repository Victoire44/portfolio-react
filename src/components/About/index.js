import React from "react";
import { makeStyles, Typography, Box, Container, Divider, Grid } from "@material-ui/core";
import portrait from "./assets/portrait.jpg";
import { Timeline, Event } from "react-timeline-scribble";
import { Fragment } from "react";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& .MuiGrid-grid-md-8":{
            paddingRight: "50px"
        }
    },
    portrait: {
        height: 250,
        borderRadius: "50%",
        float: "left",
        shapeOutside: "circle(50%)",
        marginRight: theme.spacing(6)
    },
}))

export default function About() {
    const classes = useStyles();

    return (
        <div id="about" className={classes.root}>
            <Container style={{ width: "1100px" }}>
                <Grid container>
                    <Grid item md={12}>
                        <Box mb={10}>
                            <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000"> Hello, I'm Victoire</Typography>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item md={8}>
                        <img
                            src={portrait}
                            className={classes.portrait}
                            alt="portrait"
                        />
                        <Typography paragraph>
                            I'm an ambitious Web Developer living in San Francisco.
                            Certified Full-Stack Web Developer at UC Berkeley, I am equipped with the skills needed to create effective application from creation to excecution.
                            My purpose is to develop powerful products with fast user interface and optimized performance while getting an attractive UI/UX interfaces.
                             </Typography>
                        <Typography paragraph>
                            My background in Art History makes me think creatively with an artistic outlook. I think of
                                the interface like a painting where I seek to create harmony and a good balance between the
                                color and components. I really enjoy to work with React.js and material UI to get a clean and modern design.
                            </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Fragment>
                            <Timeline>
                                <Event interval={"May 2019 - August 2019"} title={"UC Berkeley Extension"} subtitle={"Full Stack Web Development Coding"}>
                                    San Francisco, California
      </Event>
                                <Event interval={"2011 – 2013"} title={"La Sorbonne"} subtitle={"Art History Master"}>
                                    Paris, France
      </Event>
                                <Event interval={"2008 – 2011"} title={"Nantes University"} subtitle={"Art History Licence"}>
                                    Nantes, France
      </Event>
                            </Timeline>
                        </Fragment>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

