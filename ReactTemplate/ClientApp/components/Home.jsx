import * as React from 'react';
import { connect } from 'react-redux';

import { homeAddItem } from '../actions/homeActions';

export class Home extends React.Component
{
    mapProducts()
    {
        return this.props.home.map((item) =>
        {
            return <p> { item } </p>
        })
    }
    render()
    {
        return <div>
            <button onClick={() => this.props.addItem("ABC")}> ADD </button>
            {this.mapProducts()}
        </div>
    }
}

const mapStateToProps = state => ({ home: state.home })

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(homeAddItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);