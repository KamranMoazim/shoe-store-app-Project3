import React, {useContext ,useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {ContextWorker} from '../Data/Context'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin : 10,
    // display: "inline"
  },
  media: {
    height:250,
  },
});

export default function EachProduct(props) {

  const { AddProduct } = useContext(ContextWorker)

  const [checker, setChecker] = useState(false)
  
  const data = props.data.data

  const classes = useStyles();

  function itemPusher() {
    AddProduct(data._productId)
    setChecker(!checker)
  }

  if (checker) {

    return (<Grid item md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {data.image}
            title={data.name} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name} 
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
            ${data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" variant="contained"  color="primary" >  Already Added </Button>
          <Button size="medium" variant="contained" color="primary"> <Link to={`/products/${data._productId}`} >     Details     </Link>    </Button>
        </CardActions>
      </Card>
    </Grid>)
  }

  return (
  <Grid item md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= {data.image}
            title={data.name} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name} 
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
            ${data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" variant="contained"  color="primary" onClick={itemPusher}>  Add to Cart </Button>
          <Button size="medium" variant="contained" color="primary"> <Link to={`/products/${data._productId}`} >     Details     </Link>    </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}






