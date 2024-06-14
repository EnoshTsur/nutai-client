import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import FormManager from "./components/ui/Form/Form";
import { InputField, SelectField } from "./components/ui/Form/types";
import Input from "./components/ui/Form/Input/Input";
import Select from "./components/ui/Form/Select/Select";
import UserProfileForm from "./components/UserProfileForm/UserProfileForm";
import GlobalStyles from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";
import { useUserProfileStore } from "./user/store";
import { ActivityLevel, Gender, UserProfile } from "./user/types";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router";
import routes from "./routes/AppRoutes";
import Button from "./components/ui/Button/Button";
import { QueryClient, QueryClientProvider } from "react-query";
import useIsUserAuthenticated from "./hooks/useIsUserAthenticated";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const { isAuthenticated } = useIsUserAuthenticated()

  useEffect(() => {
    console.log({ isAuthenticated });
    
  }, [isAuthenticated])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Routes>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} Component={component} />
            ))}
          </Routes>
          <PanelButtons />
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

const PanelButtons = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      { routes.map(({ path }) => (
        <Button key={path} onClick={() => {
          navigate(path)
        }}>{path}</Button>
      ))}
    </div>
  );
};
