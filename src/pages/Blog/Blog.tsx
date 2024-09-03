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
import { Link } from "react-router-dom"

const parser = new DOMParser()

const Blog = () => {

    const linkStyle = {
        color: "inherit",
        textDecoration: "none"
    }

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    const parseDescription = (description: any) => {
        const parsed = parser.parseFromString(description, "text/html")
        const result =
            parsed.querySelector("p.medium-feed-snippet") !== null
                ? parsed.querySelector("p.medium-feed-snippet")?.textContent
                : parsed.querySelector("p")?.textContent
        return result
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
                  description: parseDescription(x.description),
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
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography fontWeight={500} fontSize="60px" color="primary.contrastText">
                                Blog
                            </Typography>
                            <Typography variant="h3" color="primary.contrastText">
                                {t("blogDescription1")} <b>Medium</b> {t("blogDescription2")}
                            </Typography>
                        </Grid>
                        <Grid item mt={3} xs={12}>
                            {isLoading ? (
                                <Box mt={4} sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                            ) : (
                                medium.map((article, index) => {
                                    return (
                                        <Grid key={index} container spacing={3}>
                                            <Box key={index}>
                                                <Link to={article.url} style={linkStyle}>
                                                    <Card sx={{ backgroundColor: theme.palette.primary.main }}>
                                                        <CardContent>
                                                            <Typography variant="h4" color="secondary.light">
                                                                {article.date}
                                                            </Typography>
                                                            <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                                                {article.title}
                                                            </Typography>
                                                            <Typography variant="h4" color="secondary.main">
                                                                {article.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            </Box>
                                        </Grid>
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