import { create } from "zustand";

export const getToken = () => {
    const tokenJSON = window.localStorage.getItem('loggedUser')
    if (tokenJSON){
        const token = JSON.parse(tokenJSON)     
        return token
    } 
    return '' 
}

export const useUsuarioStore = create((set) => ({
    token: `${getToken()}`,
    user: '',
    // esto funciona bien
    // setToken: (newToken) => {
    //   const token = newToken;
    //   set({ token });
    //   console.log(token);
    // },
    setToken: (newToken) => {
      set({token: newToken})
    },
    setUser: (newUser) => {
        set({user: newUser})
    },
}))