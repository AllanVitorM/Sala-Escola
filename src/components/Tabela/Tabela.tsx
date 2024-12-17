import {Container, Table, HeaderRow, TableRow, TableCell } from './styled';

const dados = [
    { data: '14/11/2024', horario: '01:30 PM', servico: 'ALONGAMENTO EM GEL', profissional: 'Roberto Sales' },
    { data: '12/09/2024', horario: '02:10 PM', servico: 'ESCOVA SIMPLES', profissional: 'Adriana Campos' },
    { data: '08/08/2024', horario: '01:00 PM', servico: 'ESMALTAÇÃO E DECORAÇÃO', profissional: 'Luana Santana' },
];

const Tabela: React.FC = () => {
    return(
        <>
        <Container>
            <Table>
                <thead>
                    <HeaderRow>
                        <TableCell as="th">DATA</TableCell>
                        <TableCell as="th">HORÁRIO</TableCell>
                        <TableCell as="th">SERVIÇO</TableCell>
                        <TableCell as="th">PROFISSIONAL</TableCell>
                    </HeaderRow>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                    <TableRow key={index} highlight={index % 2 === 0}>
                        <TableCell>{item.data}</TableCell>
                        <TableCell>{item.horario}</TableCell>
                        <TableCell>{item.servico}</TableCell>
                        <TableCell>{item.profissional}</TableCell>
                    </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
        </>
    )
}

const historico = [
    { data: '14/11/2024', horario: '13:30 PM', servico: 'ALONGAMENTO EM GEL', profissional: 'ROBERTO SALES' },
    { data: '12/09/2024', horario: '14:10 PM', servico: 'ESCOVA SIMPLES', profissional: 'ADRIANA CAMPOS' },
    { data: '08/08/2024', horario: '13:00 PM', servico: 'ESMALTAÇÃO E DECORAÇÃO', profissional: 'LUANA SANTANA' },
    { data: '16/04/2024', horario: '15:50 PM', servico: 'LIMPEZA DE PELE', profissional: 'CÍCERO DE ALMEIDA' },
    { data: '13/04/2024', horario: '13:00 PM', servico: 'BANHO DE BRILHO', profissional: 'ADRIANA CAMPOS' },
    { data: '12/02/2024', horario: '15:50 PM', servico: 'ESMALTAÇÃO', profissional: 'ROBEERTO SALES' },
    { data: '15/01/2024', horario: '13:00 PM', servico: 'HIDRATAÇÃO', profissional: 'ADRIANA CAMPOS' },
];

const TabelaHistorico: React.FC = () => {
    return(
        <>
        <Container>
            <Table>
                <thead>
                    <HeaderRow>
                        <TableCell as="th">DATA</TableCell>
                        <TableCell as="th">HORÁRIO</TableCell>
                        <TableCell as="th">SERVIÇO</TableCell>
                        <TableCell as="th">PROFISSIONAL</TableCell>
                    </HeaderRow>
                </thead>
                <tbody>
                    {historico.map((item, index) => (
                    <TableRow key={index} highlight={index % 2 === 0}>
                        <TableCell>{item.data}</TableCell>
                        <TableCell>{item.horario}</TableCell>
                        <TableCell>{item.servico}</TableCell>
                        <TableCell>{item.profissional}</TableCell>
                    </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
        </>
    )
}

export { Tabela, TabelaHistorico }