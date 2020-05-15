import React from 'react'

const Card = ({ time, icon, max, min }) => {

	const getIcon = () => {
      if(icon.includes("clear")) {
         return "fas fa-sun";
      } else if(icon.includes("rain")) {
         return "fas fa-cloud-showers-heavy";
      } else if(icon.includes("broken")) {
         return "fas fa-cloud-sun";
      } else if(icon.includes("snow")) {
         return "fas fa-snowflake";
      } else if(icon.includes("clouds")) {
         return "fas fa-cloud";
      } else {
         return "fas fa-cloud";
      }
   }
   const kalvinToCelsiusHigh = (deg) => Math.ceil(deg-273.15);

   const kalvinToCelsiusLow = (deg) => Math.floor(deg-273.15);

	return(
		<div className='w-1/4 bg-gray-800 text-center p-8 m-4 rounded-lg shadow-2xl'>
			<div className='text-md text-center'>
				{time}
			</div>
			<div className='text-2xl'>
				<i className={getIcon()}/>
			</div>
			<div>
				<p className='text-lg'>
					{kalvinToCelsiusHigh(max)}/
					<span className='text-base text-gray-500 self-end'>
						{kalvinToCelsiusLow(min)}
					</span>
				</p>
			</div>
		</div>
	)
}

export default Card;