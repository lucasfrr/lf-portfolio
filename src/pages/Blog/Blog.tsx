import { Box, Card, CardContent, Container, Grid, LinearProgress, Typography } from "@mui/material"
import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import LFBar from "../../components/LFBar/LFBar"
import LFooter from "../../components/LFooter/LFooter"
import FlagImg from "../../components/FlagImg/FlagImg"
import LangButton from "../../components/LangButton/LangButton"
import theme from "../../theme"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Brazil from "../../assets/images/brazil.png"
import UnitedKingdom from "../../assets/images/united-kingdom.png"

const Blog = () => {

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    const [medium, setMedium] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lucasfrr",
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setMedium(
              data.items.map((x) => {
                return {
                  title: x.title,
                  url: x.link,
                  date: x.pubDate.split(" ")[0],
                };
              })
            );
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
    
        return () => {
          setMedium([]);
        };
      }, []);
    
    return (
        <>
            <LFBar />
            <Grid bgcolor={theme.palette.primary.main} item>
                <LangButton onClick={handleChangelanguage}>
                    {currentlanguage === "pt" ?
                        <><Typography fontSize="13px">Switch to</Typography><FlagImg src={UnitedKingdom} /></> :
                        <><Typography fontSize="13px">Mudar para</Typography><FlagImg src={Brazil} /></>
                    }
                </LangButton>
            </Grid>
            <LFPageStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" color="primary.contrastText" textAlign="center">
                                Blog
                            </Typography>
                            <Typography variant="h3" color="primary.contrastText" textAlign="center">
                                Todos os meus posts são publicados no Medium mas vou deixar os links dele aqui para você ler.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {isLoading ? (
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                            ) : (
                                medium.map((article, index) => {
                                    return (
                                        <div
                                            key={`${index} container`}
                                            aria-label="blog posts container"
                                        >
                                            <Box key={index}>
                                                <a
                                                href={article.url}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                >
                                                <Box>
                                                    
                                                    <Card sx={{ minWidth: 275 }}>
                                                        <CardContent>
                                                            {article.date}
                                                            {article.title}
                                                            {article.url}
                                                        </CardContent>
                                                    </Card>
                                                    
                                                </Box>
                                                </a>
                                            </Box>
                                        </div>
                                    )
                                })
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default Blog