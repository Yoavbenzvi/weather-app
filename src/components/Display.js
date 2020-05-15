import React from 'react';
import Card from './Card';

const Display = ({ data, display }) => {

   const renderDisplay = () => {
   	switch(display) {
   		case('current'):
   			return(
   				<div className='mx-auto'>
   					<Card 
   						max={data.current.temp} 
   						min={data.current.temp} 
   						time={new Date().toLocaleString().substring(11, 16)} 
   						icon={data.current.weather[0].description}
   					/>
   				</div>
   			)
   		case('hourly'):
   			return(
null
   			)
   		case('daily'):
   			return(
                  <div className='flex flex-wrap space-around'>
                     {data.daily.slice(0, 7).map((day, i) => <Card
                        icon={day.weather[0].main}
                        max={day.temp.max}
                        min={day.temp.min}
                        time={i}
                        key={i}
                     />)}
                  </div>
   			)
   		default:
   			return(
               null
   			)
   	}
   }

   if(data) {	
		return(
			<div className='display border'>
				{renderDisplay()}
			</div>
		)
   } else {
   	return null
   }
}

export default Display;