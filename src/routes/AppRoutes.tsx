import React from "react";
import UserLoginForm from "../components/UserAuthenticationForm/UserLoginForm/UserLoginForm";
import UserRegister from "../components/UserAuthenticationForm/UserRegisterForm/UserRegisterForm";
import UserProfileForm from "../components/UserProfileForm/UserProfileForm";
import Home from "../pages/Home/Home";
import FoodItemForm from "../components/FoodItemForm/FoodItemForm";
import FoodItems from "../components/FoodItems/FoodItems";
import Dashboard from "../pages/Dashboard/Dashboard";

type RouteKey = "home" | "login" | "userProfile" | "register" | "foodItem" | "foodItems" | "dashboard";

export interface RouteValue {
  readonly path: string;
  readonly label: string;
  readonly component: React.ComponentType;
}

export type RoutesConfig = Readonly<Record<RouteKey, RouteValue>>;

const routes: RoutesConfig = {
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
    component: () => <Dashboard />
  },
  foodItems: {
    path: '/food-items',
    label: 'All food items',
    component: () => <FoodItems />
  },
  foodItem: {
    path: "/food-item",
    label: "Food Item",
    component: () => <FoodItemForm />,
  },
  home: {
    path: "/",
    label: "Home",
    component: () => <Home />,
  },
  login: {
    path: "/login",
    label: "Login",
    component: () => <UserLoginForm />,
  },
  userProfile: {
    path: "/user-profile",
    label: "User  Profile",
    component: () => <UserProfileForm />,
  },
  register: {
    path: "/register",
    label: "Register",
    component: () => <UserRegister />,
  },
};

export default routes;
