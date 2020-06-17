import React, {cloneElement} from "react";
import { makeStyles, Divider } from "@material-ui/core/";
import { motion } from "framer-motion"

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: "30px",
        fontFamily: "'Poiret One', cursive",
        fontWeight: 800,
        textTransform: "uppercase"
    }
}));


export default function Title(props) {
    const classes = useStyles()
    const title = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -40 }
    }
    return (
        <motion.div mb={10} >
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={title}
            >
                {cloneElement(props.children, {
                    className: classes.title
                })}
            </motion.div>
            <Divider style={{marginBottom: "40px"}}/>
        </motion.div>
    )
}