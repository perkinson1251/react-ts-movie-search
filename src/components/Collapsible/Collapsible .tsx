import { ReactNode, useState } from "react";

import * as S from "./styles";

interface CollapsibleProps {
    title: string;
    children: ReactNode;
}

const Collapsible = ({ title, children }: CollapsibleProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <S.Container>
            <S.Button onClick={handleClick}>{title}</S.Button>
            {open && <S.Content>{children}</S.Content>}
        </S.Container>
    );
};

export default Collapsible;
