
export interface Participant {
  name: string;
  email: string;
  eventName: string;
  registeredDate: string;
  status: 'PENDING' | 'CONFIRMED';
  uniqueId?: string;
}

export type Step = 'EMAIL_INPUT' | 'OTP_INPUT' | 'CONFIRMATION_DETAILS' | 'SUCCESS';

export interface VerificationState {
  currentStep: Step;
  email: string;
  participantData?: Participant;
  otpSentAt?: number;
}
