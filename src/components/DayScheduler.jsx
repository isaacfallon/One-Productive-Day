import TimeGridEvent from "./TimeGridEvent";

import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewDay } from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/calendar.css'
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createCurrentTimePlugin } from '@schedule-x/current-time';
import { createScrollControllerPlugin } from '@schedule-x/scroll-controller';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { createResizePlugin } from '@schedule-x/resize'

const scrollController = createScrollControllerPlugin({
  initialScroll: '07:30'
})

const eventsServicePlugin = createEventsServicePlugin();

let today = new Date();
let dd = String(today.getDate()).padStart(2, 0);
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

let todayString = yyyy + '-' + mm + '-' + dd;

export default function DayScheduler() {
  const calendar = useCalendarApp({
    views: [
      createViewDay()
    ],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: todayString + ' 09:00',
        end: todayString + ' 11:00',
        status: 'todo'
      },
      {
        id: '2',
        title: 'Event 2',
        start: todayString + ' 15:00',
        end: todayString + ' 20:00',
        status: 'done'
      },
    ],
    selectedDate: todayString,
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin(),
      createCurrentTimePlugin(),
      scrollController,
      eventsServicePlugin,
      createResizePlugin()
    ],
  });

  // calendar.eventsService.add({
  //   title: 'Event at 8',
  //   start: todayString + ' 08:00',
  //   end: todayString + ' 09:00',
  //   id: 3,
  // })

  console.log(eventsServicePlugin.getAll().length);

  function addEvent() {
    calendar.eventsService.add({
      title: 'Another ONE',
      start: todayString + ' 10:00',
      end: todayString + ' 10:30',
      id: eventsServicePlugin.getAll().length + 1,
    })
  }

  return (
    <>
      <div className="bg-green-400">
        <p>Today&apos;s date: {today}</p>
        <button onClick={addEvent}>Add event</button>
        <ScheduleXCalendar
          calendarApp={calendar}
          customComponents={{
            timeGridEvent: TimeGridEvent
          }}
        />
      </div>
    </>
  )
}