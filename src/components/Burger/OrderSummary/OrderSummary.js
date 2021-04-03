import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });
        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A deliciuous burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p style={{fontWeight: "bold"}}>Total Price: ${this.props.price.toFixed(2)}</p>

                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;