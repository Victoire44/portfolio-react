import React from "react";
import { makeStyles, Typography, Box, Container, Divider } from "@material-ui/core";
import portrait from "./assets/portrait.jpg";

const useStyles = makeStyles(theme => ({
    about: {
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        <div id="about" className={classes.about}>
            <Container style={{width:"1100px"}}>
                <Box mb={10} >
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000"> Hello, I'm Victoire</Typography>
                    <Divider />
                </Box>
                <img
                    src={portrait}
                    className={classes.portrait}
                    alt="portrait"
                />
                <Typography paragraph>
                    I am an ambitious Full Stack Web Developer living in San Francisco who has
                   transitioned over from being an paintings's expert.
                             </Typography>
                <Typography>
                    My background in Art History makes me think creatively with an artistic outlook. I think of
                    the interface like a painting where I seek to create harmony and a good balance between the
                    color and components.
                            </Typography>
                <Typography paragraph>
                    I enjoy creating and developing powerful products using HTML, CSS and React.js. I am equipped
                        with the skills needed to create products that bring joy to users.
                            </Typography>
                <Typography>
                    Feel free to have a look on my work.
                            </Typography>

            </Container>
        </div>
    )
}

