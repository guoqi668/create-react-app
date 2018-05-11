import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {a: 'test'}
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <Button onClick={onIncreaseClick}></Button>
                <Button><Link to='/login'>t</Link></Button>
            </div>
         )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    return {
        value: state.counter.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        onIncreaseClick: () => {
            dispatch({type: 'increase'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);