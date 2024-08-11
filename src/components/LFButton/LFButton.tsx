import { styled } from "@mui/material"
import { ReactNode } from "react"

interface LFButtonProps {
    children: ReactNode,
    onClick: () => void
}

const LFButton: React.FC<LFButtonProps> = ({ children, onClick }) => {
    const LFButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        transition: "border-color 0.5s, background-color 0.5s",
        '&:hover': {
            backgroundColor: theme.palette.info.main,
            border: `1px solid ${theme.palette.info.dark}`
        }
    }))

    return (
        <>
            <LFButton onClick={onClick}>{children}</LFButton>
        </>
    )
}

export default LFButton
