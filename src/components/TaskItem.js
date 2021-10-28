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
