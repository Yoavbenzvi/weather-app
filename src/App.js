import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Selectors from './components/Selectors'

class App extends React.Component {
   constructor() {
      super()

      this.state = {
         display: 'current',
         //hourly
         //daily
         data: null
         //.current.temp = temperature
         //.timezone = location
         //.daily = array
         //.hourly = array
      }
   }


   componentDidMount() {
      const fetchWeather = (lon, lat) => {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e8225be1aa07c8310717e23a670d52f2`)
         .then(res => res.json())
         .then(data => this.setState({ data }))
      }

     navigator.geolocation.getCurrentPosition(results => console.log(fetchWeather(results.coords.longitude, results.coords.latitude)))
   }

   changeDisplay = (display) => this.setState({display});

   kaToCeHigh = (deg) => Math.ceil(deg-273.15);

   kaToCeLow = (deg) => Math.floor(deg-273.15);

   render() {
     return(
       <div className='w-full p-8 text-white'>
         <div className='con w-4/5 mx-auto shadow-2xl rounded-lg flex'>
         {/*left*/}
            <div className='bg-blue-900 w-3/5 rounded-l-lg'>
               left
            </div>
         {/*right*/}
            <div className='flex justify-center rounded-r-lg bg-gray-700 w-2/5'>
               <div className='flex flex-col text-center'>
                  <Clock location={this.state.data ? this.state.data.timezone : null}/>
               </div>
            </div>
         </div>
       </div>
     )
   }

}

export default App;
