import React, {useContext , useState} from 'react';
import {ContextWorker} from '../Data/Context'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles( (theme) => ({
    img: {
        height:"200px",
        width : "200px",
        border: " 1px solid #ddd",
        borderRadius: "4px",
        boxShadow: "0 0 2px 1px rgba(0, 140, 186, 0.5)",
        marginLeft:"10px",
        marginTop:"10px",
        display : "inline"
      },
    div: {
      display: "flex"
    },
    button : {
      background: "#abcdef",
      display: "inline-block",
      fontSize: "90px position: relative",
      height:"50px",
      width : "50px",
      marginTop : "90px"
    }
}));

export default function ProductForCart(props) {

  const shoe = props.shoe

  const [itemCount, setItemCount] = useState(1)

  const { RemoveProduct } = useContext(ContextWorker)

  function itemRemover() {
    RemoveProduct(shoe._productId)
  }


  const classes = useStyles();

  return (
      <div className={classes.div}>
          <img src={shoe.image} className={classes.img} alt="Shoe" />
          <h1 style={{textAlign:"center", margin:"10", paddingTop:"72px", paddingLeft:"15px", paddingRight:"15px"}}>{shoe.name}</h1>
          <h1 style={{textAlign:"center", margin:"10", paddingTop:"72px", paddingLeft:"15px", paddingRight:"15px"}}>${shoe.price}</h1>
          <button className={classes.button} onClick={() => { setItemCount(itemCount + 1) }}> Add </button>
          <h1 style={{textAlign:"center", margin:"10", paddingTop:"72px", paddingLeft:"15px", paddingRight:"15px"}}>{itemCount}</h1>
          <button className={classes.button} onClick={() => { setItemCount(itemCount - 1) }}> Minus </button>
         <h1 style={{textAlign:"center", margin:"10", paddingTop:"72px", paddingLeft:"15px", paddingRight:"15px"}}>=${ itemCount * shoe.price }</h1>

         <Button size="medium" variant="contained"  color="primary" onClick={itemRemover}>  Remove Shoe </Button>
      </div>
  );
}






