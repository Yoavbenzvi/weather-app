import React from 'react';

class Clock extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         time: new Date().toLocaleString().substring(11),
         date: new Date().toLocaleString().substring(0,9)
      };
   }

   componentDidMount() {
      this.intervalID = setInterval(
         () => this.tick(),
         1000
      );
   }

   componentWillUnmount() {
     clearInterval(this.intervalID);
   }

   tick() {
     this.setState({
       time: new Date().toLocaleString().substring(11)
     });
   }

   render() {
      return (
         <div className='text-center text-l text-bold font-bold'>
            <p className='mx-auto'>
               <span className='underline text-red-500 text-xs'>location: </span>{this.props.location}
            </p>
            <p>
               <span className='underline text-red-500 text-xs'>date: </span>{this.state.date}
            </p>
            <p>
               <span className='underline text-red-500 text-xs'>time: </span>{this.state.time}
            </p>
         </div>
      );
   }
}

export default Clock;