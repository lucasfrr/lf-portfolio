import { styled } from "@mui/material"

const LFAvatar = styled("img")(({ theme }) => ({
    width: "85%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%"
}))

export default LFAvatar