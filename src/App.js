import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date("2022-01-23"),
    end: new Date("2022-01-24"),
    detail: "Hi Holla",
    desc: "Power lunch",
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function App() {
  return (
    <div className="App">
      <Calendar
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={(event) => alert(event.detail)}
      />
    </div>
  );
}

export default App;
