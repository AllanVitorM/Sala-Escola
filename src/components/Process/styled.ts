import styled from "styled-components";

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;
  position: relative;
  padding: 30px 60px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    height: 2px;
    background-color: #dcdcdc; // Cor da linha base
    z-index: 0;
  }
`;

export const StepContainer = styled.div<{ completed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  img {
    width: 60px; // Tamanho maior para os ícones
    height: 60px;
    border-radius: 50%;
    padding: 8px;
    background-color: ${({ completed }) =>
      completed ? "#EBFAF1" : "#FFF"};
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ completed }) => (completed ? "#4CAF50" : "#A9A9A9")};
  }

  .step-number {
    color: ${({ completed }) => (completed ? "#4CAF50" : "#DADADA")};
    margin-top: 8px;
  }
`;

export const LineConnector = styled.div<{ active: boolean }>`
  height: 0.5px;
  flex: 1;
  background-color: ${({ active }) => (active ? "#4CAF50" : "#DCDCDC")};
  margin: 0 5px;
`;
