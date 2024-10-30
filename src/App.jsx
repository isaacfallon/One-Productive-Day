import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import DayScheduler from "./components/DayScheduler";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-8">

        {/* left side */}
        <div className="flex-col px-4 w-1/4">
          <Timer />
          <TodoList /> 
        </div>

        {/* right side */}
        <div className="w-1/4 px-4">
          <DayScheduler />
        </div>
      </div>
    </>
  )
}