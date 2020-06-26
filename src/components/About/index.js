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
    root: {
        background: "#fafafa"
    },
    gridImages: {
        position: "relative",
        "@media (max-width: 600px)": {
            display: "none"
        }
    },
    description: {
        fontFamily: "'Lato', sans-serif",
        fontSize: theme.spacing(4)
    }
}))

export default function About() {
    const classes = useStyles();

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.95, 1], [0.5, 1, 1.5, 1, 0.5]);

    return (
        <Section id="about">
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
                <Grid item md={6} className={classes.gridImages}>
                    <motion.img
                        src={portrait}
                        alt="Portrait"
                        style={{
                            height: "180px",
                            position: "absolute",
                            top: "60px",
                            left: "120px",
                            filter: "grayscale(60%)",
                            scale
                        }}
                    />
                    <motion.img
                        src={sanfrancisco}
                        alt="San Francisco"
                        style={{
                            height: "120px",
                            position: "absolute",
                            top: "340px",
                            left: "90px",
                            filter: "grayscale(60%)",
                            scale
                        }}
                    />
                    <motion.img
                        src={nantes}
                        alt="Nantes"
                        style={{
                            height: "55px",
                            position: "absolute",
                            top: "300px",
                            left: "350px",
                            filter: "grayscale(60%)",
                            scale
                        }}
                    />
                    <motion.img
                        src={firminGirard}
                        alt="Firmin Girard"
                        style={{
                            height: "115px",
                            position: "absolute",
                            top: "110px",
                            left: "380px",
                            filter: "grayscale(60%)",
                            scale
                        }}
                    />
                    <motion.img
                        src={rothko}
                        alt="Rothko"
                        style={{
                            height: "170px",
                            position: "absolute",
                            top: "400px",
                            left: "270px",
                            scale
                        }}
                    />

                </Grid>
            </Grid>
        </Section>
    )
}

