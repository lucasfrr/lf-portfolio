import { styled } from "@mui/material"
import { ReactNode } from "react"

interface LangButtonProps {
    children: ReactNode,
    onClick: () => void
}

const LangButton: React.FC<LangButtonProps> = ({ children, onClick }) => {
    const LangButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "300px",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        transition: "color 0.5s",
        '&:hover': {
            color: theme.palette.info.main
        }
    }))

    return (
        <>
            <LangButton onClick={onClick}>
                {children}
            </LangButton>
        </>
    )
}

export default LangButton
