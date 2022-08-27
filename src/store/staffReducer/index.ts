const INITIAL_STATE = {
	staff: [],
}
export interface ActionType {
	type: string
	payload: object
}
const staffReducer = (state = INITIAL_STATE, action: ActionType) => {
	return state
}

export default staffReducer
