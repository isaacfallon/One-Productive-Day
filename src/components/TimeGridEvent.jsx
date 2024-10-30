export default function TimeGridEvent({ calendarEvent }) {
    return (
      <>
        <div className="bg-slate-50 p-1 border border-sky-800 h-full">
          <span>{calendarEvent.title}</span>
          {calendarEvent.status === 'todo' && <> TODO</>}
          {calendarEvent.status === 'done' && <> DONE</>}
        </div>
      </>
    );
  }