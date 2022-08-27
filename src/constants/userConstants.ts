export const USER_STATUS_ENUM = {
  ACTIVE: 1,
  INACTIVE: 2,
  INVITE_SENT: 3,
  PENDING_REVIEW: 4,
  AWAITING_DOC: 5,
  PARKED: 6,
  OFFBOARDING_REQUEST: 7,
  TERMINATED: 8,
  LICENSE_EXPIRED: 9,
};

export const AGENT_STATUS = {
  NEW_REGISTRATION: 1,
  TRANSFER: 2,
  REINSTATED_WITH_RECO: 3,
};

export const AGENT_TYPE_ENUM_LABEL: { [key: number]: string } = {
  1: "New Registrant",
  2: "Transfer Agent",
  3: "Reinstated with RECO",
};

export const USER_STATUS_ROUTE_MAP = {
  [USER_STATUS_ENUM.PENDING_REVIEW]: "/agent-onboard/review/",
  [USER_STATUS_ENUM.INVITE_SENT]: "/agent-onboard/contact-details/",
  [USER_STATUS_ENUM.PARKED]: "/dashboard/parked",
  [USER_STATUS_ENUM.TERMINATED]: "/dashboard/terminated",
  // [USER_STATUS_ENUM.ACTIVE]: "/profile-setting",
  [USER_STATUS_ENUM.ACTIVE]: "/agent-dashboard",
  [USER_STATUS_ENUM.LICENSE_EXPIRED]: "/agent-dashboard",
  // [USER_STATUS_ENUM.LICENSE_EXPIRED]: "/license-expired",
};

export const USER_STATUS_TEXT_ENUM: { [key: number]: string } = {
  1: "Active",
  2: "Inactive",
  3: "Invite sent",
  4: "Pending Review",
  5: "Awaiting doc",
  6: "Parked",
  7: "OffBoarding Request",
  8: "Terminated",
  9: "License Expired",
};

export const AGENT_STATUS_TEXT: { [key: number]: string } = {
  1: "Active agent",
  3: "New Agent",
  4: "New Agent",
  6: "Parked",
  8: "Terminated",
  9: "License Expired",
};

export const ROLE_MAPING = {
  AGENT: 2,
  ADMIN: 1,
};

export const PUBLIC_ROUTES = {
  SIGN_UP: "/sign-up",
  PASSWORD_REVOVERY: "/password-recovery",
  RECOVERY_LINK: "/recovery-link",
  PASSWORD_RESET: "/password-reset-send",
  CREATE_PASSWORD: "/login/password-reset/:token",
  SET_PASSWORD: "/set-password/:token",
  TERMINATE_AGENT: "/termination-survey/:token",
  OTP_LOGIN: "/otp-login",
};

export const TRREB = "TRREB";
