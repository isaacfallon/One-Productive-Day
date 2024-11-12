import Header from "./components/Header";
// import Timer from "./components/Timer";
import Timer2 from "./components/Timer2";
import TodoList from "./components/TodoList";
import DayScheduler from "./components/DayScheduler";
import Footer from "./components/Footer";

import Modal from "./components/Modal";

export default function App() {
  return (
    <>
      <Header />

      <div className="flex justify-center mt-8">

        {/* left side */}
        <div className="flex-col px-4 w-1/4">
          {/* <Timer /> */}
          <Timer2 />
          <TodoList />
        </div>

        {/* right side */}
        <div className="w-1/4 px-4">
          <DayScheduler />
        </div>

      </div>
      <Footer />

    </>
  )
}