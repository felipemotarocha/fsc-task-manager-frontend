// const TaskItem = ({ task }) => {
//     return (
//         <>
//             <h1>{task.description}</h1>
//             <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
//         </>
//     );
// };

// export default TaskItem;

import React from "react";

class TaskItem extends React.Component {
    componentDidMount() {
        console.log("component was mounted!");
    }

    componentWillUnmount() {
        console.log("i will unmount!");
    }

    render() {
        const { task } = this.props;

        return (
            <>
                <h1>{task.description}</h1>
                <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
            </>
        );
    }
}

export default TaskItem;