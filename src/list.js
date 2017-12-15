import React, { Component } from 'react';


class MeteorList extends Component {
  render() {
    return (
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-primary">
                                <th scope="row">Name</th>
                                    <th>Estimated Diameter(feet)</th>
                                    <th>Date of Closest Approach</th>
                                    <th>Distance (miles)</th>
                                    <th>Velocity (miles/hour)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.asteroids.map((asteroid)=>{
                          return(
                            <tr key={asteroid.id}>
                              <td>{asteroid.name}</td>
                              <td>{asteroid.diameterMin} - {asteroid.diameterMax}</td>
                              <td>{asteroid.date}</td>
                              <td>{asteroid.distance}</td>
                              <td>{asteroid.velocity}</td>
                            </tr>
                          )
                      })}

                            </tbody>
                    </table>
                < /div>
        )
    }
};

export default MeteorList;
