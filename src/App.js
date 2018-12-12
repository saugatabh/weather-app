import React from 'react';
import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather";

const API_KEY = "22a2207626cc06345cfde862dc7d2050";

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		if (city && country){
			console.log(data);
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ""
		});
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please Enter the values"
		});
		}
		
	}
	render() {
		return ( 
		<div> 
		<Titles /> 
		<Form getWeather={this.getWeather}/>
		<Weather 
			city={this.state.city}
			country={this.state.country}
			temperature={this.state.temperature}
			humidity={this.state.humidity}
			description={this.state.description}
			error={this.state.error}
		/>
		</div>
		);
	}
}

export default App;

