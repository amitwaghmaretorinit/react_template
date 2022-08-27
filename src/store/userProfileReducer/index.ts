import { createActions, createReducer } from "reduxsauce"

const INITIAL_STATE = {}

export interface ActionType {
	type: string
	payload: object
}

const { Types, Creators } = createActions({
	setUser: ["userResponse"],
})

export const onUserResponseSucess = (state = INITIAL_STATE, action: { userResponse: {} }) => {

	return (
		action.userResponse || {}
	)

}

const HANDLERS = {
	[Types.SET_USER]: onUserResponseSucess,
}

const userProfileReducer = createReducer(INITIAL_STATE, HANDLERS)
export const userActions = Creators

export default userProfileReducer
