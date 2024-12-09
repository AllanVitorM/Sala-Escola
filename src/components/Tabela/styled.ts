import styled from "styled-components"


export const Container = styled.div`
    width: 80%;
    height: calc(40vh - 120px); /* Certifique-se que essa altura é adequada para o layout geral */
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 10%;
    margin-left: 7%;
    display: flex;
    justify-content: space-between;  
    align-items: center; 
    position: relative; /* Define que o Container segue o fluxo da página */  
    font-family: "Kumbh Sans", Helvetica, sans-serif;
`;

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed;
  font-family: "Kumbh Sans", Helvetica, sans-serif;
`;

// Cabeçalho da tabela
export const HeaderRow = styled.tr`
  background: #f7f7f7;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  position: sticky; /* Mantém o cabeçalho fixo */
  top: 0; /* Garante que ele fique no topo */
  z-index: 2; /* Coloca o cabeçalho acima do restante */
  border-bottom: 1px solid #ddd;
  font-family: "Kumbh Sans", Helvetica, sans-serif;
`;

// Linha da tabela
export const TableRow = styled.tr<{ highlight: boolean }>`
  background: ${({ highlight }) => (highlight ? "#AEB3F8" : "#ffffff")};
  transition: background-color 0.3s; /* Animação suave para hover */

  &:hover {
    background: #202240;
    color: #FFF
  }
`;

// Célula da tabela
export const TableCell = styled.td`
  padding: 12px;
  font-size: 16px;
  text-align: center; /* Centraliza horizontalmente */
  vertical-align: middle; /* Centraliza verticalmente */
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Kumbh Sans", Helvetica, sans-serif;

  &:first-child {
    border-left: 1px solid #ddd;
  }

  &:last-child {
    text-align: center;
    border-right: 1px solid #ddd;
  }
`;