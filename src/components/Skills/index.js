import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core/';
import { Container, Typography } from "@material-ui/core/";


const useStyles = makeStyles({


});
export default function Skills() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <Typography variant="h3" align="center">Skills</Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <CardMedia  
                        image=".logos/css.png"
                        />
                        <Typography className={classes.title}>
                        HTML
                     </Typography>

                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>
                      
                     </Typography>

                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}