import React, { useEffect, useState } from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import getRate, { Rate } from '../../hooks/getRate'

const RateCard: React.FC = () => {
    const [rate, setRate] = useState<Rate>()

    useEffect(() => {
        getRate().then(value => setRate(value))
    }, [])

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            card: {
                marginTop: theme.spacing(5),
                width: 'min-content',
                flexDirection: 'column',
                backgroundColor: theme.palette.primary.light,
                [theme.breakpoints.down('sm')]: {
                    marginTop: theme.spacing(3),
                    width: '100%'
                }
            },
            cardContent: {
                flexDirection: 'row',
                flexWrap: 'nowrap',
                width: '100%',
            },
            row: {
                
                justifyContent: 'flex-end'
            },
            rate: {
                color: theme.palette.secondary.main
            }
        }))
    
    const classes = useStyles()

    return(
        <Card variant="outlined" className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Grid container>
                    <Grid item xs={6} md={12} className={classes.row}>
                        <Typography variant="h5">
                            EUR / USD
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={12} className={classes.row}>
                        <Typography variant="h3" className={classes.rate}>
                            {rate && rate.currentRate}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="body2">
                            {rate && rate.date?.toTimeString()}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default React.memo(RateCard)