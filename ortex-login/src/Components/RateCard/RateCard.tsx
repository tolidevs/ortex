import React from 'react';

import { Card, CardContent, CardProps, Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface IRateCardProps extends CardProps {
    currentRate?: number,
    date?: Date
}

const RateCard: React.FC<IRateCardProps> = (props) => {
    const { currentRate, date } = props

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            card: {
                marginTop: theme.spacing(5),
                width: 'max-content',
                flexDirection: 'row',
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
                            {currentRate}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="body2">
                            {date?.toTimeString()}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default React.memo(RateCard)