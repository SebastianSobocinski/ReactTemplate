import * as React from 'react';
import { connect } from 'react-redux';

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



function mapStateToProps(state)
{
    return {
        home: state.home
    }
}
function mapDispatchToProps(dispatch)
{
    return {
        addItem: (item) =>
        {
            dispatch({
                type: 'ADD',
                payload: item
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);