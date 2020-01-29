import React from "react";
import { makeStyles, CardHeader, Container, Typography, Paper, Box, Divider } from "@material-ui/core/";
import html from "./assets/html.svg";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
import materialize from "./assets/materialize.png";
import material from "./assets/material.png";
import javascript from "./assets/js.png";
import react from "./assets/react.png";
import jquery from "./assets/jquery.png";
import node from "./assets/node.png";
import mysql from "./assets/mysql.png";
import mongo from "./assets/mongodb.png";

const useStyles = makeStyles({
    wrap: {
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    logos: {
        height: 80,
    },
    skills: {
        flex: "auto",
        flexWrap: "wrap"
    },
});


export default function Skills() {
    const classes = useStyles();

    return (
        <div id="skills" className={classes.wrap}>
            <Container style={{ width: "1100px" }}>
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Skills</Typography>
                    <Divider />
                </Box>
                <Paper elevation={1}>
                    <CardHeader
                        align="center"
                        title="Front End"
                    />
                    <Box display="flex">
                        <Box className={classes.skills}>
                            <img src={html} alt="HTML" className={classes.logos} />
                            <Typography >HTML</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={css} alt="CSS" className={classes.logos} />
                            <Typography className={classes.title}>CSS</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={bootstrap} alt="Bootstrap" className={classes.logos} />
                            <Typography className={classes.title}>Boostrap</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={materialize} alt="Materialize" className={classes.logos} />
                            <Typography className={classes.title}>Materialize</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={material} alt="Material UI" className={classes.logos} />
                            <Typography className={classes.title}>Material UI</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={javascript} alt="Javascript" className={classes.logos} />
                            <Typography className={classes.title}>JavaScript</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={react} alt="React.js" className={classes.logos} />
                            <Typography className={classes.title}>React.js</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={jquery} alt="JQuery" className={classes.logos} />
                            <Typography className={classes.title}>JQuery</Typography>
                        </Box>
                    </Box>
                </Paper>

                <Paper elevation={2}>
                    <CardHeader
                        align="center"
                        title="Back End"
                    />
                    <Box display="flex" justifyContent="center">
                        <Box className={classes.skills}>
                            <img src={node} alt="Node" className={classes.logos} />
                            <Typography className={classes.title}>Node</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={mysql} alt="MySql" className={classes.logos} />
                            <Typography className={classes.title}>MySql</Typography>
                        </Box>
                        <Box className={classes.skills}>
                            <img src={mongo} alt="Mongo DB" className={classes.logos} />
                            <Typography className={classes.title}>Mongo DB</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container >
        </div >
    )
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

// import html from "./assets/html.svg";
// import css from "./assets/css.png";
// import bootstrap from "./assets/bootstrap.png";
// import materialize from "./assets/materialize.png";
// import material from "./assets/material.png";
// import javascript from "./assets/js.png";
// import react from "./assets/react.png";
// import jquery from "./assets/jquery.png";
// import node from "./assets/node.png";
// import mysql from "./assets/mysql.png";
// import mongo from "./assets/mongodb.png";



// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         flexWrap: 'nowrap',
//         // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//         transform: 'translateZ(0)',
//     },
//     title: {
//         color: theme.palette.primary.light,
//     },
//     titleBar: {
//         background:
//             'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
// }));


// const tileData = [
// {
//     img: {html},
//     title: "html",
//     author: "html"
// },
// { 
//     img: { css},
//     title: "css",
//     author: "css"
// },
// ];

// export default function SingleLineGridList() {
//     const classes = useStyles();

//     return (
//       <div className={classes.root}>
//         <GridList className={classes.gridList} cols={2.5}>
//           {tileData.map(tile => (
//             <GridListTile key={tile.img}>
//               <img src={tile.img} alt={tile.title} />
//               <GridListTileBar
//                 title={tile.title}
//                 classes={{
//                   root: classes.titleBar,
//                   title: classes.title,
//                 }}
//                 actionIcon={
//                   <IconButton aria-label={`star ${tile.title}`}>
//                     <StarBorderIcon className={classes.title} />
//                   </IconButton>
//                 }
//               />
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>
//     );
//   }