import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';





const aboutMe = `My name is Robert Anderson, I have worked remotely with different groups of people to develop 3 applications using agile methodology. "Search-U" uses multilpe API's to create a search function to find quality of life scores near colleges. The other 2 are full stack applications, one being "BarkMatch" that helps dog shelters find dog walking volunteers and "Farm to Table" that creates an e-commerce for local farmers to have easier access to sales in their community.`

const aboutMeCont = `Front-end development is really where I have found enjoyment in coding, specifically using React. Throughout the program I have enjoyed the struggle of learning something new and also being able to help others succeed. Almost 9 years of Coaching Crossfit has helped to hone in my communication and leadership skills and has allowed me to do the thing I really enjoy most, which is helping others realize that they are capable of more then they believe.`

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    typo: {
        color: "lightgrey"
    },
    media: {
        height: 250,
        maxWidth:250
    }
  }));
const About = ({color}) => {
    const classes = useStyles();
    
    return (
    <Grid container >
        <Grid container justify="center" style={{marginTop: 24}}>
            <Grid item sm={3} xs={6} >
            <CardMedia
    className={classes.media}
    image={process.env.PUBLIC_URL + "/assets/images/githubPhoto.jpeg"}
    title="Robert Anderson"
/>
            </Grid>
            </Grid>
            <Box m={2} p={2}>
            <Grid container>

            <Grid item sm={12} xs={12} >
                <Typography paragraph className={classes.typo}>{aboutMe}
                    </Typography> 
            </Grid>
            <Grid item sm={12} xs={12} >
                <Typography paragraph className={classes.typo}>{aboutMeCont}
                    </Typography> 
            </Grid>
        </Grid>
        </Box>
        
    </Grid>
    );
};

export default About;