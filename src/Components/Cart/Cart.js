import React from 'react';

const Cart = (props) => {
    const course = props.cart
    const total = course.reduce((total,crse) => total+crse.price,0)
    return (
        <div className = 'cart'>
            <h4>Select your courses</h4>
            <h5>Courses Selected: {course.length}</h5>
            <h5>Total: ${total}</h5>
        </div>
    );
};

export default Cart;