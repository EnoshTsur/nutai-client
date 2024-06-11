import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Input from "./components/ui/Form/Input/Input";
import Select from "./components/ui/Form/Select/Select";
import GlobalStyles from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";
import { useUserProfileStore } from "./user/store";
import { ActivityLevel, Gender, UserProfile } from "./user/types";

function App() {
  const [age, setAge] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();
  const [genderValue, setGenderValue] = useState<keyof typeof Gender | undefined>();
  const [activityLevel, setActivityLevel] =
    useState<keyof typeof ActivityLevel | undefined>();

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
      <div
        style={{
          margin: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Input
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
          type="number"
          error={""}
        />
        <Input
          placeholder="Weight"
          value={weight}
          onChange={(e) => {
            setWeight(Number(e.target.value));
          }}
          type="number"
          error={""}
        />
        <Input
          placeholder="Height"
          value={height}
          onChange={(e) => {
            setHeight(Number(e.target.value));
          }}
          type="number"
          error={""}
        />
        <Select
          placeholder="Gender"
          options={["Male", "Female"]}
          value={genderValue}
          onChange={(gender) => {
            setGenderValue(gender);
          }}
        />

        <Select
          placeholder="Activity Level"
          options={[
            "Sedentary",
            "LightlyActive",
            "ModeratelyActive",
            "VeryActive",
            "ExtraActive",
          ]}
          value={activityLevel}
          onChange={(gender) => {
            setActivityLevel(gender);
          }}
        />
      </div>
      <button onClick={() => {
        const profile: UserProfile = {
          age: age ?? 0,
          height: height ?? 0,
          weight: weight ?? 0,
          gender: Gender[genderValue ?? 'Male'],
          activityLevel: ActivityLevel[activityLevel ?? 'LightlyActive']
        }
        setUserProfile(profile)
      }}>Checkout</button>

      { userBMR !== 0 && (
        <div style={{ color: 'white'}}>
          <h1>BMR: {userBMR}</h1>
          <h1>TDE: {userTDE}</h1>
        </div>
      )}
      {/* <button
        onClick={() => {
          setTheme((pre) => (pre === darkTheme ? lightTheme : darkTheme));
        }}
      >
        change Theme
      </button> */}
    </ThemeProvider>
  );
}

export default App;
