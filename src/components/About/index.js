import React from "react";
import { makeStyles, Typography, Box, Container, Grid } from "@material-ui/core";
import portrait from "./assets/portrait.jpg";
import rothko from "./assets/rothko.jpg";
import firminGirard from "./assets/firmin-girard.jpg";
import sanfrancisco from "./assets/san-francisco.jpg";
import nantes from "./assets/nantes.jpg";
import Title from "../Title";
import { motion, useTransform, useViewportScroll, useMotionValue } from "framer-motion"

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
            }
        }
    }
}))

export default function About() {
    const classes = useStyles();

    const { scrollYProgress } = useViewportScroll()
    const x = useMotionValue(50)
    const y = useTransform(x, value => value * 2, scrollYProgress);


    return (
        <div id="about" className={classes.root}>
            <Container maxWidth="md">
                <Title>
                    <Typography>Hello, I'm Victoire</Typography>
                </Title>
                <Grid container>
                    <Grid item md={6} >
                        <Typography paragraph align="justify" className={classes.description}>
                            <Box lineHeight={2}>
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
                    <Grid item md={6} style={{ position: "relative" }}>
                        <motion.img
                            src={portrait}
                            alt="Portrait"
                            style={{
                                height: "230px",
                                position: "absolute",
                                top: "20px",
                                left: "120px",
                                filter: "grayscale(50%)"
                            }}
                        />
                        <img
                            src={sanfrancisco}
                            alt="San Francisco"
                            style={{
                                height: "160px",
                                position: "absolute",
                                top: "300px",
                                left: "90px",
                                filter: "grayscale(50%)"
                            }}
                        />
                        <img
                            src={nantes}
                            alt="Nantes"
                            style={{
                                height: "80px",
                                position: "absolute",
                                top: "280px",
                                left: "350px",
                                filter: "grayscale(50%)"

                            }}
                        />
                        <img
                            src={firminGirard}
                            alt="Firmin Girard"
                            style={{
                                height: "155px",
                                position: "absolute",
                                top: "70px",
                                left: "360px",
                                filter: "grayscale(50%)"

                            }}
                        />
                        <img
                            src={rothko}
                            alt="Rothko"
                            style={{
                                height: "210px",
                                position: "absolute",
                                top: "360px",
                                left: "260px"
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

