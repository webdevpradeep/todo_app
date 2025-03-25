import { Check, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); //task Input State
  const [tasks, setTasks] = useState([]);

  const updateTasks = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTasks([{ task: inputValue, isDone: false }, ...tasks]);
      //settasks((prevTasks) =>[...prevTasks, inputValue])
      setInputValue('');
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen">
      <section className="p-5 shadow-xl rounded-xl bg-green-100 h-96 w-[90%] max-w-md">
        <form onSubmit={updateTasks} className="flex justify-between gap-5">
          <input
            type="text"
            placeholder="Write Your task here.."
            className="px-4 border-2 border-green-600 w-3/4 h-10 rounded"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <button className="bg-green-600 h-10 w-1/4 rounded text-white">
            Add
          </button>
        </form>
        <ul className="mt-5 grid gap-2 divide-y divide-gray-400">
          {tasks.map((task, index) => (
            <li
              className={`flex justify-between pb-2 ${
                task.isDone && 'line-through decoration-gray-900'
              }`}
              key={index}
            >
              <span>{task.task}</span>

              <div className="flex gap-2">
                <Check
                  size={20}
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                  onClick={() => {
                    const newTasks = [...tasks];
                    newTasks[index].isDone = true;
                    setTasks(newTasks);
                  }}
                />

                <X
                  size={20}
                  className="text-gray-500 cursor-pointer hover:text-red-600"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;
