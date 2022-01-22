import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date("2022-01-23"),
    end: new Date("2022-01-23"),
    detail: "Hi Holla",
  },
  {
    title: "Vacation",
    start: new Date("2022-01-24"),
    end: new Date("2022-01-24"),
    detail: "Bye Holla",
  },
  {
    title: "Conference",
    start: new Date("2022-01-25"),
    end: new Date("2022-01-25"),
    detail: "Holla",
  },
];

function App() {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        onSelectEvent={(event) => alert(event.detail)}
      />
    </div>
  );
}

export default App;
