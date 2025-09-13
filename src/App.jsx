import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme as themeConfig } from './styles/theme';
import AppLayout from './ui/AppLayout';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import { ResumeProvider } from './Context/ResumeContext';
import { Toaster } from 'react-hot-toast';

function ToasterWithTheme() {
  const { isDark } = useTheme();
  const currentTheme = isDark ? themeConfig.dark : themeConfig.light;

  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: currentTheme.background.card,
          color: currentTheme.text.primary,
        },
      }}
    />
  );
}

function ThemedApp() {
  const { isDark } = useTheme();
  const currentTheme = isDark ? themeConfig.dark : themeConfig.light;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ResumeProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="about" />} />
              <Route path="about" element={<About />} />
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </ResumeProvider>
      </BrowserRouter>
      <ToasterWithTheme />
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
