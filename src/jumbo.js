import React, { Component } from 'react';


class Jumbotron extends Component {
  render() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-3 jumbotext"><span id='headline'></span>Meteor Watch 2018!</h1>
                <p className="lead insidetext">A list of meteors that may or may not kill us, as they are close to Earth.</p>
                <hr className="my-4"/>
                <p className="lead">
                <a className="btn btn-info btn-lg uglybutton" href="https://www.nasa.gov/" target="_blank"role="button">Learn more</a>
                </p>
            </div>
        </div>


            )
        }
    };
export default Jumbotron;
