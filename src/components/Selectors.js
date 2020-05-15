import React from 'react';

const Selectors = ({ changeDisplay, display }) => {
	return(
		<div className='flex mx-auto h-8 cursor-pointer'>
			<div 
				className={`${display === 'current' ? 'bg-red-800 border-red-800 text-gray-500' : 'bg-red-500 border-red-500'} border-4 w-1/3 px-6 rounded-l-md`}
				onClick={() => changeDisplay('current')}
			>
				Current
			</div>
			<div 
				className={`${display === 'hourly' ? 'bg-red-800 border-red-800 text-gray-500' : 'bg-red-500 border-red-500'} border-4 w-1/3 px-6 `}
				onClick={() => changeDisplay('hourly')}
			>
				Hourly
			</div>
			<div 
				className={`${display === 'daily' ? 'bg-red-800 border-red-800 text-gray-500' : 'bg-red-500 border-red-500'} border-4 w-1/3 px-6 rounded-r-md`}
				onClick={() => changeDisplay('daily')}
			>
				Daily
			</div>
		</div>
	)
}

export default Selectors;