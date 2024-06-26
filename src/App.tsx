import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { darkTheme } from "./theme";
import { MemoryRouter, Route, Routes } from "react-router";
import routes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Routes>
            {Object.values(routes).map(({ path, component }) => (
              <Route key={path} path={path} Component={component} />
            ))}
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;