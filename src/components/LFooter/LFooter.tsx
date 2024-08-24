import { Container, Grid, styled, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';

const LFooter = () => {

    const StyledFooter = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "70px",
        width: "100%",
        height: "180px",
        alignItems: "center",
    }))

    return (
        <>
            <StyledFooter>
                <Container maxWidth="lg">
                    <Grid display="flex" position="static" container spacing={3}>
                        <Grid item xs={12} alignItems="center" justifyContent="center">
                            <Typography color="primary.contrastText" textAlign="center">
                                <CopyrightIcon /> 2024 Lucas Ferreira - All rights reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </StyledFooter>
        </>
    )
}

export default LFooter