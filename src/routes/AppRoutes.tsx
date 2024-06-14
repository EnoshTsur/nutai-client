import React from "react"
import UserLoginForm from "../components/UserAuthenticationForm/UserLoginForm/UserLoginForm"
import UserRegister from "../components/UserAuthenticationForm/UserRegisterForm/UserRegisterForm"
import UserProfileForm from "../components/UserProfileForm/UserProfileForm"
import Home from "../pages/Home/Home"

type RouteKey = 'home' | 'login' | 'userProfile' | 'register'

type Routes = Readonly<Record<RouteKey, { path: string, component: React.ComponentType }>>

const routes: Routes = {
    home: {
        path: '/',
        component: () => <Home />
    },
    login: {
        path: '/login',
        component: () => <UserLoginForm />
    },
    userProfile: {
        path: '/user-profile',
        component: () => <UserProfileForm />
    },
    register: {
        path: '/register',
        component: () => <UserRegister />
    }
}

export default routes