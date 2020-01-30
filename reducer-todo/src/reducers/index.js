export default function appReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

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
};