import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

export const Modifier = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
    return (
        <S.Modifier
            onClick={onClick}
            whileHover={{ scale: 1.5 }}
        >
            {children}
        </S.Modifier>
    );
};

const S = {
    Modifier: styled(motion.button)`
        font-size: 60px;
        color: white;
        background: none;
        margin: auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    `,
};
