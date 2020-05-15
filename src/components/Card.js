import React from 'react'

const Card = ({ time, icon, max, min }) => {
	
   const kalvinToCelsiusHigh = (deg) => Math.ceil(deg-273.15);

   const kalvinToCelsiusLow = (deg) => Math.floor(deg-273.15);

	return(
		<div className='w-1/4 mx-auto bg-gray-800 text-center p-6 m-2 rounded-lg shadow-2xl'>
			<div className='text-xl'>
				{time}
			</div>
			<div className='text-2xl'>
				<i className='fas fa-cloud'/>
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