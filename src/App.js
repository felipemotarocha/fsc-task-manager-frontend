import { useState, useRef, useEffect } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
        } else {
            console.log("component was updated!");
        }
    });

    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Ler",
            isCompleted: true,
        },
    ]);

    const handleCleanTasks = () => {
        setTasks([]);
    };

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
            <button onClick={handleCleanTasks}>Limpar tarefas</button>
        </>
    );
};

export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleStateChange = this.handleStateChange.bind(this);
//         this.state = {
//             tasks: [
//                 {
//                     id: "1",
//                     description: "Estudar Programação",
//                     isCompleted: false,
//                 },
//                 {
//                     id: "2",
//                     description: "Ler",
//                     isCompleted: true,
//                 },
//             ],
//         };
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(prevState);
//         console.log("component was updated!");
//     }

//     handleStateChange() {
//         this.setState({
//             tasks: [],
//         });
//     }

//     render() {
//         return (
//             <>
//                 {this.state.tasks.map((task) => (
//                     <TaskItem key={task.id} task={task} />
//                 ))}
//                 <button onClick={this.handleStateChange}>Limpar tarefas</button>
//             </>
//         );
//     }
// }

// export default App;
