import { createActions, createReducer } from "reduxsauce";
import { cloneDeep } from "lodash";

export interface AgentOnBoardingSteps {
  currentStep: number;
  contactDetails: Object;
  personalInfo: Object;
  employmentInfo: Object;
  precDetails: Object;
  charityEnrollments: Object;
  "review-agreements" : Object;
  BillingCommission: Object;
}
const INITIAL_STATE: AgentOnBoardingSteps = {
  currentStep: 0,
  contactDetails: {},
  personalInfo: {},
  employmentInfo: {},
  precDetails: {},
  charityEnrollments: {},
  "review-agreements": {},
  BillingCommission: {}
};

const { Types, Creators } = createActions({
  updateForm: ["formType", "details"],
  setStep: ["step"],
  resetState: [],
});

export const updateForm = (
  state = cloneDeep(INITIAL_STATE),
  action: { formType: string; details: any }
) => {
  return {
    ...state,
    [action.formType]: action.details,
  };
};

export const setStep = (state = cloneDeep(INITIAL_STATE), action: { step: number }) => {
  return {
    ...state,
    currentStep: action.step,
  };
};

export const resetState = (state = INITIAL_STATE, action: {}) => {
  return cloneDeep(INITIAL_STATE);
};

const HANDLERS = {
  [Types.UPDATE_FORM]: updateForm,
  [Types.SET_STEP]: setStep,
  [Types.RESET_STATE]: resetState,
};

const agentOnboardingReducer = createReducer(cloneDeep(INITIAL_STATE), HANDLERS);
export const agentOnboardingActions = Creators;

export default agentOnboardingReducer;
