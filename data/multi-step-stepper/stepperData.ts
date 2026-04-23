type InputStepper = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
};
type StepperData = {
  stepNumber: number;
  stepName: string;
  stepTitle: string;
  stepDescription: string;
  inputs: InputStepper[];
};
export const stepperData: Record<number, StepperData> = {
  1: {
    stepNumber: 1,
    stepName: "Personal",
    stepTitle: "Personal info",
    stepDescription: "Tell us a bit about yourself",
    inputs: [
      {
        id: "full-name",
        label: "Full name",
        placeholder: "John Doe",
        type: "text",
      },
      {
        id: "email",
        label: "Email address",
        placeholder: "john@example.com",
        type: "email",
      },
    ],
  },
  2: {
    stepNumber: 2,
    stepName: "Security",
    stepTitle: "Security",
    stepDescription: "Keep your account safe",
    inputs: [
      {
        id: "password-1",
        label: "Password",
        placeholder: "••••••••",
        type: "password",
      },
      {
        id: "password-2",
        label: "Confirm password",
        placeholder: "••••••••",
        type: "password",
      },
    ],
  },
  3: {
    stepNumber: 3,
    stepName: "Preferences",
    stepTitle: "Preferences",
    stepDescription: "Almost done",
    inputs: [
      {
        id: "username",
        label: "Username",
        placeholder: "@johndoe",
        type: "text",
      },
      {
        id: "bio",
        label: "Bio",
        placeholder: "Tell us about yourself...",
        type: "text",
      },
    ],
  },
};
