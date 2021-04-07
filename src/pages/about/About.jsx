import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';





const aboutMe = `Recent graduate from Georgia Tech's Full Stack Web Development Program. I have worked remotely with different groups of people to develop 3 applications using agile methodology. One of them was focused on the use of API's and the other 2 were focused on being full stack applications that ended with the final application being MERN stack. Front end is really where I have found enjoyment in coding, specifically using React. Throughout the program I have enjoyed the struggle of learning something new and also being able to help others succeed. Almost 9 years of Coaching Crossfit has helped to hone in my communication and leadership skills and has allowed me to do the thing I really enjoy most, which is helping others realize that they are capable of more then they believe.`

const aboutMeCont = `Outside of programming I find that
the things I enjoy most are very simple. I like to spend time with
my wife who is a bada$$ nurse. We have two "classy ladies" (senior
dogs) who we are very grateful have kept happy and healthy through
the years. We will go and hike and be adventurous but we will also
spend hours at home cooking and watching netflix. Though I would
call myself a homebody I do like to go and hangout with friends
either at someones house, a restaurant, brewery, park, maybe even
playing some tennis or golf (sports I suck at, but enjoy sucking
at).`

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