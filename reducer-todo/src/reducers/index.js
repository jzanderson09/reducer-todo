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
            return { tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
}

