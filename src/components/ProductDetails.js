import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import {ContextWorker} from '../Data/Context'
import { makeStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( (theme) => ({
    img: {
        border: " 1px solid #ddd",
        borderRadius: "4px",
        padding: "25px",
        boxShadow: "0 0 2px 1px rgba(0, 140, 186, 0.5)",
        marginLeft:"30px",
        marginTop:"30px",
        display : "inline"
      },
    div: {
      height:250,
      display: "flex"
    },
    h4: {
        marginLeft : "40px",
        marginRight:"40px"
    },
    price: {
        marginLeft : "40px",
        marginRight:"40px",
        textAlign :"left",
        display:"inline"
    },
}));


function ProductDetails() {

    const classes = useStyles();

    const {products, AddProduct} = useContext(ContextWorker)    

    const {id} = useParams()
    const shoe = products[id]

    function itemPusher() {
        AddProduct(shoe._productId)
      }

    return (
        <div>
            
            <div className={classes.div}>

                <img src={shoe.image} className={classes.img}  height={500} width={500} alt="Shoe" />

                <div>
                    <h1 style={{textAlign:"center", margin:"80"}}>{shoe["name"]}</h1>

                    <p className={classes.h4} >{shoe["description"]}</p>

                    <h1 className={classes.price}>
                        <AttachMoneyIcon  /> {shoe.price}
                    </h1>

                    <Button variant="contained" color="secondary" onClick={itemPusher}>
                        Add to Cart
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails
