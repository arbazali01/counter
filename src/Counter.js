import React from 'react';
import { connect } from 'react-redux';

function incrementCounter(num){
    return{
        type: 'INCREMENT',
        num: num
    }
}
function decrementCounter(num){
    return{
        type: 'DECREMENT',
        num : num
    }
}

function Counter(props){
    function incrementClick(){
        props.incrementCounter(1);
    }
    function decrementClick(){
        props.decrementCounter(1);
    }
    return <div>
        <p>{props.count}</p>
        <button onClick = {decrementClick}> Decrease </button>
        <button onClick = {incrementClick}> Increase </button>
    </div>;
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    incrementCounter, decrementCounter
}


export default connect(mapStateToProps, mapDispatchToProps) (Counter);

