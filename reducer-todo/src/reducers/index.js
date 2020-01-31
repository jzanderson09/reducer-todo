//initial State Object:
export const initialState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        },
        {
            item: 'Do Some Laundry',
            completed: false,
            id: Date.now()*10
        },
        {
            item: 'Learn Redux',
            completed: false,
            id:  Date.now()*23
        }
    ]
}

export const todoListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = { 
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return { tasks: [...state.tasks, newTodo] };
        case "TOGGLE_COMPLETED":
            const toggledTaskArr = state.tasks.map(task => {
                if (task.id === action.payload) {
                  return {...task, completed: !task.completed};
                }
                return task;
              });
              return { tasks: toggledTaskArr };
        case "CLEAR_COMPLETED":
            const clearedTaskArr = state.tasks.filter(task => task.completed === false);
            return { tasks: clearedTaskArr };
        default:
            return state;
    }
}

