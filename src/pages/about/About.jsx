import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const aboutMe = `After coaching Crossfit for roughly 8 years I wanted to try and
change up my overall career focus. Though I love coaching I wanted
to challenge myself to learn something that is very foreign and new
to me. That is why I am here. When I entered the Georgia Tech
BootCamp I had zero working knowledge of anything I was getting
into, and though that was terrifying it was also very intriguing. I
am giving myself a chance to grow and struggle and I believe I will
be much better for it in the end. I believe that my years spent as a
coach will help me communicate with others and give and receive
criticism in an effective manner. I really enjoy working with others
and look forward to get started on some cool and fun projects.`

const aboutMeCont = `Outside of jumping headfirst into uncharted territory, I find that
the things I enjoy most are very simple. I like to spend time with
my wife who is a bada$$ nurse. We have two "classy ladies" (senior
dogs) who we are very grateful have kept happy and healthy through
the years. We will go and hike and be adventurous but we will also
spend hours at home cooking and watching netflix. Though I would
call myself a homebody I do like to go and hangout with friends
either at someones house, a restaurant, brewery, park, maybe even
playing some tennis or golf (sports I suck at, but enjoy sucking
at).
`
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
    <Grid container  alignContent="center" className={classes.root}>
        <Grid container spacing={2}>
            <Grid item sm={4} xs={6}>
            <CardMedia
    className={classes.media}
    image="/assets/images/githubPhoto.jpeg"
    title="Robert Anderson"
/>
            </Grid>
            <Grid item style={{marginTop: 16}} sm={8} xs={6}>
                <Typography align="justify" variant="p" paragraph className={classes.typo}>{aboutMe}
                    </Typography> 
            </Grid>
            
        </Grid>
        <Grid container justify="flex-end">
            <Grid item sm={8} xs={6}>
                <Typography align="justify" variant="p" paragraph className={classes.typo}>{aboutMeCont}
                    </Typography> 
            </Grid>
        </Grid>
        
    </Grid>
    );
};

export default About;