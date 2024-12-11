import React from "react";

import { StepsContainer, StepContainer, LineConnector } from "./styled";

interface Step {
  icon: string;
  label: string;
  stepNumber: string;
  completed: boolean;
}

interface ProcessStepsProps {
  steps: Step[];
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => {
  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <StepContainer completed={step.completed}>
            <img src={step.icon} alt={`${step.label} icon`} />
            <span className="step-number">{`Etapa ${step.stepNumber}`}</span>
            <span>{step.label}</span>
          </StepContainer>
          {index < steps.length - 1 && (
            <LineConnector active={steps[index + 1].completed} />
          )}
        </React.Fragment>
      ))}
    </StepsContainer>
  );
};
