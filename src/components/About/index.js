import React from "react";
import { makeStyles, Typography, Box, Container, Grid } from "@material-ui/core";
import portrait from "./assets/portrait.jpg";
import rothko from "./assets/rothko.jpg";
import firminGirard from "./assets/firmin-girard.jpg";
import sanfrancisco from "./assets/san-francisco.jpg";
import nantes from "./assets/nantes.jpg";
import Title from "../Title";
import { motion, useTransform, useViewportScroll, useMotionValue } from "framer-motion"
import Section from "../Section";

const useStyles = makeStyles(theme => ({
    images: {
        position: "relative",
        height: 0,
        width: "100%",
        paddingBottom: "100%",
    },
    description: {
        fontFamily: "'Lato', sans-serif",
        fontSize: theme.spacing(4)
    }
}))

export default function About() {
    const classes = useStyles();

    const { scrollY } = useViewportScroll();

    return (
        <Section id="about" style={{ background: "#fafafa" }}>
            <Title>
                <Typography>Hello, I'm Victoire</Typography>
            </Title>
            <Grid container>
                <Grid item md={6} >
                    <Typography paragraph className={classes.description}>
                        <Box lineHeight={2}>
                            Certified Full-Stack Web Developer at UC Berkeley, I am equipped with the skills needed to create effective application from creation to execution.
                            I aim to develop powerful products with fast user interface and optimized performance while getting an attractive UI/UX interfaces.
                                </Box>
                        <br />
                        <Box lineHeight={2}>
                            I developed an artistic sensitivity with my background in Art History and 5 years experience in this field. I seek to create harmony and a good balance between the color and components
                            to get a clean and modern design. My creativity and my attention to detail allows me to have a cross functional collaboration with design team more efficient.
                                </Box>
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.images}>
                        <motion.img
                            src={portrait}
                            alt="Portrait"
                            style={{
                                width: "40%",
                                position: "absolute",
                                top: "20%",
                                left: "10%",
                                filter: "grayscale(60%)",
                                y: useTransform(scrollY, [1000, 4000], [150, -400])
                            }}
                        />
                        <motion.img
                            src={sanfrancisco}
                            alt="San Francisco"
                            style={{
                                height: "27%",
                                position: "absolute",
                                top: "75%",
                                left: "5%",
                                filter: "grayscale(60%)",
                                y: useTransform(scrollY, [1000, 4000], [100, -400])
                            }}
                        />
                        <motion.img
                            src={nantes}
                            alt="Nantes"
                            style={{
                                height: "14%",
                                position: "absolute",
                                top: "48%",
                                left: "52%",
                                filter: "grayscale(60%)",
                                y: useTransform(scrollY, [1000, 4000], [100, -100])
                            }}
                        />
                        <motion.img
                            src={firminGirard}
                            alt="Firmin Girard"
                            style={{
                                height: "28%",
                                position: "absolute",
                                top: "30%",
                                left: "55%",
                                filter: "grayscale(60%)",
                                y: useTransform(scrollY, [1000, 4000], [100, -300])
                            }}
                        />
                        <motion.img
                            src={rothko}
                            alt="Rothko"
                            style={{
                                height: "37%",
                                position: "absolute",
                                top: "74%",
                                left: "38%",
                                y: useTransform(scrollY, [1000, 4000], [100, -200])
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </Section>
    )
}

