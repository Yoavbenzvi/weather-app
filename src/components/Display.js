import React from 'react';
import Card from './Card';

const Display = ({ data, display }) => {

   const getHour = (index) => {
      let hour = new Date().getHours() + index;
      if(hour.length < 2) {hour = '0'+hour};
      if(Number(hour) >= 24) {hour = (Number(hour)-24)+''};
      return hour+':00'
   }

   const getDay = (index) => {
      const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let number = new Date().getDay() + index;
      if(number > 6) {number -= 7};
      return dayArray[number];
   }

   const renderDisplay = () => {
   	switch(display) {
   		case('current'):
   			return(
   				<div className='flex justify-center'>
   					<Card 
   						max={data.current.temp} 
   						min={data.current.temp} 
   						time={new Date().toLocaleString().substring(11, 16)} 
   						icon={data.current.weather[0].description}
   					/>
   				</div>
   			);
   		case('hourly'):
            return(
                  <div className='box w-full flex flex-wrap'>
                     {data.hourly.slice(0, 12).map((day, i) => <Card
                        icon={day.weather[0].main}
                        max={day.temp}
                        min={day.temp}
                        time={getHour(i)}
                        key={i}
                     />)}
                  </div>
            );
   		case('daily'):
   			return(
                  <div className='box w-full flex flex-wrap overflow-scroll'>
                     {data.daily.slice(0, 7).map((day, i) => <Card
                        icon={day.weather[0].main}
                        max={day.temp.max}
                        min={day.temp.min}
                        time={getDay(i)}
                        key={i}
                     />)}
                  </div>
   			);
   		default:
   			return(
               null
   			);
   	}
   }

   if(data) {	
		return(
			<div className='display w-full'>
				{renderDisplay()}
			</div>
		)
   } else {
   	return null;
   }
}

export default Display;