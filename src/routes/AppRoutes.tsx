import React from "react"
import UserLoginForm from "../components/UserAuthenticationForm/UserLoginForm/UserLoginForm"
import UserRegister from "../components/UserAuthenticationForm/UserRegisterForm/UserRegisterForm"
import UserProfileForm from "../components/UserProfileForm/UserProfileForm"
import Home from "../pages/Home/Home"

type RouteKey = 'home' | 'login' | 'userProfile' | 'register'

export interface RouteValue  { 
    readonly path: string, 
    readonly label: string
    readonly component: React.ComponentType 
}

export type RoutesConFig = Readonly<Record<RouteKey, RouteValue>>

const routes: RoutesConFig = {
    home: {
        path: '/',
        label: 'Home',
        component: () => <Home />
    },
    login: {
        path: '/login',
        label: 'Login',
        component: () => <UserLoginForm />
    },
    userProfile: {
        path: '/user-profile',
        label: 'User  Profile',
        component: () => <UserProfileForm />
    },
    register: {
        path: '/register',
        label: 'Register',
        component: () => <UserRegister />
    }
}

export default routes