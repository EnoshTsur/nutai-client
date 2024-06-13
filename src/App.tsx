import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import FormManager from "./components/ui/Form/Form";
import {
  InputField,
  SelectField,
} from "./components/ui/Form/types";
import Input from "./components/ui/Form/Input/Input";
import Select from "./components/ui/Form/Select/Select";
import UserProfileForm from "./components/UserProfileForm/UserProfileForm";
import GlobalStyles from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";
import { useUserProfileStore } from "./user/store";
import { ActivityLevel, Gender, UserProfile } from "./user/types";

function App() {
  
  const { userBMR, userTDE, setUserProfile } = useUserProfileStore(
    ({ userBMR, userTDE, setUserProfile }) => ({
      userBMR,
      userTDE,
      setUserProfile,
    })
  );

  const [theme, setTheme] = useState(darkTheme);

  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserProfileForm />
      {userBMR !== 0 && (
        <div style={{ color: "white" }}>
          <h1>BMR: {userBMR}</h1>
          <h1>TDE: {userTDE}</h1>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
