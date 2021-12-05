import { ExampleAction, ExampleState } from "./interface"

const initialState: ExampleState = { count : 0 }

const exampleReducer = (state: ExampleState, action: ExampleAction): ExampleState => {
    switch (action) {
        case ExampleAction.INCREMENT:
            return { count: state.count + 1 }
        case ExampleAction.DECREMENT: 
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default exampleReducer