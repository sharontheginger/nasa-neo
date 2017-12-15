import React, { Component } from 'react';
import Navbar from './navbar.js';
import MeteorList from './list';
import Jumbotron from './jumbo.js'
import './App.css';



class App extends Component {
    constructor(props){
        super(props)
        let today=new Date()
            this.state = {
                apiKey: "lFjAhjD01yPqINsKLNpWN611MuJxfos9pYdBHwqY",
                startDate:`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
                apiUrl: "https://api.nasa.gov/neo/rest/v1/feed",
                asteroids: []
            }
        }
    componentWillMount(){
        fetch(`${this.state.apiUrl}?start_date=${this.state.startDate}&api_key=${this.state.apiKey}`).then((rawResponse)=>{
            return rawResponse.json()
        }).then((parsedResponse) => {
        let neoData = parsedResponse.near_earth_objects
        //let neoData = this.state.rawData.near_earth_objects
        let newAsteroids = []
        Object.keys(neoData).forEach((date)=>{
            neoData[date].forEach((asteroid) =>{
                newAsteroids.push({
          id: asteroid.neo_reference_id,
          name: asteroid.name,
          date: asteroid.close_approach_data[0].close_approach_date,
          diameterMin: asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0),
        diameterMax: asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0),
        closestApproach: asteroid.close_approach_data[0].miss_distance.miles,
        velocity: parseFloat(asteroid.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0),
        distance: asteroid.close_approach_data[0].miss_distance.miles
          })
        })
    })
    this.setState({asteroids: newAsteroids})
    debugger
})
}



  render() {
    return (
      <div className="App">
        <Jumbotron />

        <p>A meteoroid (/ˈmiːtiərɔɪd/) is a small rocky or metallic body in outer space.

Meteoroids are significantly smaller than asteroids, and range in size from small grains to 1 meter-wide objects. Objects smaller than this are classified as micrometeoroids or space dust. Most are fragments from comets or asteroids, whereas others are collision impact debris ejected from bodies such as the Moon or Mars.

When a meteoroid, comet, or asteroid enters Earth's atmosphere at a speed typically in excess of 20 km/s (72,000 km/h; 45,000 mph), aerodynamic heating of that object produces a streak of light, both from the glowing object and the trail of glowing particles that it leaves in its wake. This phenomenon is called a meteor or "shooting star". A series of many meteors appearing seconds or minutes apart and appearing to originate from the same fixed point in the sky is called a meteor shower. If that object withstands ablation from its passage through the atmosphere as a meteor and impacts with the ground, it is then called a meteorite.

An estimated 15,000 tonnes of meteoroids, micrometeoroids and different forms of space dust enter Earth's atmosphere each year</p>
        <MeteorList asteroids={this.state.asteroids}/>
      </div>
    );
  }
}

export default App;
