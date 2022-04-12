import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useTitle } from "react-use"

export const HomeView = () => {
  const { t, i18n } = useTranslation();
  useTitle(t('titles.home'));
  const handleSwitchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>{t('titles.home')}</Typography>
              <Button color='inherit' onClick={handleSwitchLanguage}>Switch language</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary'>Test</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
