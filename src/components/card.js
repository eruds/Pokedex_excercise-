import React, { Component } from 'react'
import "./card.css"

/*
    Props : 
        - title
        - subtitle

*/

export default class card extends Component {
    render() {
        return (
            <div className="card">
                <div className="cardtitle">
                    { this.props.title }
                </div>
                <div className="cardcontent">
                    <div className="cardImage">
                        { this.props.image }
                    </div>
                </div>
                <div className="cardaction">
                    <button></button>
                </div>
            </div>
        )
    }
}
