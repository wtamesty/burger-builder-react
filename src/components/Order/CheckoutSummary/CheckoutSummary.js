import React from 'react';

import Burger from '../../Burger/Burger';
import Buttom from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Buttom btnType="Danger"    clicked={props.checkoutCancelled}>CANCEL    </Buttom>
            <Buttom btnType="Success"   clicked={props.checkoutContinued}>CONTINUE  </Buttom>
        </div>
    );
}

export default checkoutSummary;