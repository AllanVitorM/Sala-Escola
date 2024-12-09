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

export { Tabela }