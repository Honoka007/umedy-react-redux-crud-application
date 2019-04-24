// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions'


class EventsIndex extends Component {
    componentDidMount(){
        this.props.readEvents()
    }
    renderEvents(){
        return _.map(this.props.events, event => (
            <tr>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render(){// eslint-disable-next-line
        const props = this.props

        return (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </table>
        )
    }

}

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({readEvents})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

