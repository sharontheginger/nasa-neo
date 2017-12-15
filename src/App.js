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

        <p>{"Organic you probably haven't heard of them copper mug schlitz. Vexillologist hot chicken messenger bag, brooklyn skateboard coloring book iPhone tofu banh mi. DIY aesthetic farm-to-table artisan, selvage actually man braid yuccie. Pork belly gastropub cred bicycle rights migas, af chartreuse cliche try-hard single-origin coffee PBR&B mixtape polaroid. Tumeric cred cold-pressed portland godard beard copper mug fam. Hashtag hell of marfa, flannel fanny pack shoreditch keytar small batch four dollar toast gastropub gochujang you probably haven't heard of them."}</p>
        <MeteorList asteroids={this.state.asteroids}/>
      </div>
    );
  }
}

export default App;
