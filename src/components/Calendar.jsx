import React from "react";
import moment from 'moment'

export default class Calendar extends React.Component {
  state = {
    dateObject: moment()
  }
  weekdayshort = moment.weekdaysShort();
  weekdayshortname = this.weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  render() {
    return (
      <div>
        <h2>Calendar</h2>
      </div>
    );
  }
}