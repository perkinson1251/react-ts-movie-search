import * as S from "./styles";

import { TableContentProps } from "core/types/table";

interface TableProps {
    content: TableContentProps[];
}

const Table = ({ content }: TableProps) => {
    return (
        <S.Table>
            {content.map((el, index) => (
                <tr key={index}>
                    <S.Td gray>{el.title}</S.Td>
                    <S.Td>{el.value}</S.Td>
                </tr>
            ))}
        </S.Table>
    );
};

export default Table;
