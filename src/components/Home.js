import React, {useContext} from 'react'
import Image from '../static/shoe1.jpg'; // Import using relative path
import AllProducts from './AllProducts'


const styles = {
    backContainer: {
        backgroundImage: `url(${ Image })`,
        backgroundRepeat  : 'no-repeat',
        height: 556,
        width: 1535,
        backgroundSize: 'cover',
        
    }
};

export default function Home() {
    return (
        <div >
            <div style={styles.backContainer}>
            </div>

            <AllProducts />
        </div>
    )
}



  