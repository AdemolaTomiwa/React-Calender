import React, { Component } from 'react';
import Calendar from 'react-calendar';
import TileContent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Scheduler from 'react-scheduler-calendar';

export default class Test extends Component {
   state = {
      date: new Date(),
   };

   onChange = (date) => this.setState({ date });

   addContent = ({ date, view }) => {
      if (view === 'month' && date.getDate() === 4) {
         return <p>Working</p>;
      } else {
         return <p>''</p>;
      }
   };

   render() {
      return (
         <div>
            <Calendar
               style={{ width: '1000px', height: '700px' }}
               onClickDay={(value, events) => alert(value)}
               onChange={this.onChange}
               value={this.state.date}
               tileContent={this.addContent}
               react-calender__tile={true}
            />
         </div>
      );
   }
}
