import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {total} = this.props;
        return (
            <div>
                <div>
                    <button type="button" onClick={() => this.props.dispatch({type: 'DECREMENT'})}>-</button>
                    <h5>{total}</h5>
                    <button type="button" onClick={() => this.props.dispatch({type: 'INCREMENT'})}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(store.counterReducer.total);
    return {
        total: store.counterReducer.total
    }
}
//utilizar como acima ou como abaixo 
//const mapStateToProps = ({counterReducer: {total}}) => {
//     console.log(total);
//     return {
//         total
//     }
// }

export default connect(mapStateToProps)(Counter)