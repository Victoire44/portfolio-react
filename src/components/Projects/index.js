
import React from "react";
import { Container, Typography, Box, makeStyles, Divider } from "@material-ui/core/";
import Card from "../Card";
import purrfectmatch from "../Portfolio/assets/purr-fect-match.png"
import campdad from "../Portfolio/assets/campdad.png"
import campmom from "../Portfolio/assets/campmom.png"


const useStyles = makeStyles(theme => ({
    wrap: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#fafafa"
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            <Container style={{width:"1100px"}}>
                <Box id="projects_team" mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Team Projects </Typography>
                    <Divider />
                </Box>
                <Box className={classes.card}>
                    <Card
                        image={campdad}
                        title="CampDad"
                        alt="CampDad"
                        text="Campsite search application"
                        github="https://github.com/Victoire44/project1"
                        heroku="https://victoire44.github.io/project1/"
                    />
                    <Card
                        image={campmom}
                        title="CampMom"
                        alt="CampMom"
                        text="Campsite search application in React"
                        github="https://github.com/Victoire44/CampMom"
                        heroku="https://campmom.herokuapp.com/"
                    />
                    <Card
                        image={purrfectmatch}
                        title="Purr-fect Match"
                        alt="Purr-fect Match"
                        text="Pet adoption service"
                        github="https://github.com/Victoire44/Purr-fect-Match"
                        heroku="https://purr-fect-match-vb.herokuapp.com/main"
                    />
                </Box>
            </Container>
        </div>
    )
}
