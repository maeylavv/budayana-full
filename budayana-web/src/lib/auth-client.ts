/// <reference types="vite/client" />

import { createAuthClient } from "better-auth/react"
import { usernameClient } from "better-auth/client/plugins"

const AUTH_BASE_URL = `${import.meta.env.VITE_AUTH_URL}/auth/api`

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`

export const authClient = createAuthClient({
  baseURL: AUTH_BASE_URL,
  plugins: [usernameClient()],
})

