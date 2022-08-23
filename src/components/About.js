import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Avatar from '@material-ui/core/Avatar';
// import Hidden from '@material-ui/core/Hidden';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: '1.5rem',
        maxWidth: '50em',
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    }
}));

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction='column'>
            <Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ? '1em' : '2em' }}>
                <Typography align={matchesMD ? 'center' : undefined} variant='h2'>About Us</Typography>
            </Grid>
            <Grid 
                item 
                container 
                justifyContent='center'
                className={classes.rowContainer}
                style={{marginTop: '3em'}}
            >
                <Typography variant='h4' align='center' className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual
                    to their interests, technology is meant to bring us closer to what we
                    care about in the best way possible. Arc Development will use that
                    principle to provide fast, modern, inexpensive, and aesthetic software
                    to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid 
                item
                container
                className={classes.rowContainer}
                style={{ marginTop: '10em', marginBottom: '10em' }}
                direction={matchesMD ? 'column' : 'row'}
                alignItems={matchesMD ? 'center' : undefined}
                justifyContent='space-between'
            >
                <Grid item>
                    <Grid item container direction='column' lg style={{maxWidth: '35em'}}>
                        <Grid item>
                            <Typography align={matchesMD ? 'center' : undefined} variant='h4' gutterBottom>
                                History</Typography>
                        </Grid>
                        <Grid item>
                            <Typography 
                                variant='body1'
                                align={matchesMD ? 'center' : undefined}
                                paragraph
                                style={{ fontWeight: 700, fontStyle: 'italic' }}
                            >To Be Continued...</Typography>
                            <Typography
                                variant='body1'
                                align={matchesMD ? 'center' : undefined}
                                paragraph
                            >Adi Pri-Tal's Development</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    );
};