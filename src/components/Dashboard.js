import {useState, useEffect, Fragment} from 'react'
import { useStateValue } from '../helpers/StateProvider'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minHeight: 400,
    width:400,
    backgroundColor: '#333333',
    opacity: 0.9
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
    color:'orange'
  },
  pos: {
    marginBottom: 12,
  },
  rent: {
      position:'relative',
      backgroundColor: '#333333',
      minHeight: 400,
      width:400,
      color:'#FF8300',
      opacity: 0.9
  }, 
  requests: {
    position:'relative',
    backgroundColor: '#333333',
    minHeight: 400,
    width:400,
    color:'#FF8300',
    opacity: 0.9
  },

  properties: {
    position:'relative',
    backgroundColor: '#333333',
    minHeight: 400,
    width:400,
    color:'#FF8300',
    opacity: 0.9,
    
  }
});


const Dashboard = () =>  {
    const { user } = useStateValue()
    const classes = useStyles()
    return (
       <section className="DashboardContainer">
            <div className="messages">
            <Card className={classes.root} >
                <CardContent>
                    <Typography className={classes.title} >
                    You have # of messages in your inbox
                    </Typography>
                </CardContent>
            </Card>
            </div>
            <div className="payRent">
            <Card className={classes.rent} >
                <CardContent>
                    <Typography className={classes.title} >
                    # of your tenants have paid rent so far.....
                    </Typography>
                </CardContent>
            </Card>
            </div>
            <div className="maitanenceRequests">
            <Card className={classes.requests} >
                <CardContent>
                    <Typography className={classes.title} >
                   # of maitanence requests 
                    </Typography>
                </CardContent>
            </Card>
            </div>
            <div className="properties">
            <Card className={classes.properties} >
                <CardContent>
                    <Typography className={classes.title} >
                  You have # properties in your inventory at the moment
                    </Typography>
                </CardContent>
            </Card>
            </div>
                   </section>
    )
}

export default Dashboard
