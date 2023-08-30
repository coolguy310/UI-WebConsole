import { useEffect, useState } from "preact/hooks"

import { Kratos } from "../packages/kratos-auth/auth.ts"

export function useLogout() {
  const [logoutToken, setLogoutToken] = useState<string>("")

  useEffect(() => {
    Kratos.createBrowserLogoutFlow
      .fn()
      .then((data) => {
        setLogoutToken(data.logout_token)
      })
      .catch((err: any) => {
        switch (err.response?.status) {
          case 401:
            // do nothing, the user is not logged in
            return
        }

        // Something else happened!
        return Promise.reject(err)
      })
  }, [])

  return () => {
    if (logoutToken) {
      Kratos.updateLogoutFlow
        .fn(logoutToken)
        .then(() => {
          window.location.href = "/auth/login"
        })
        .then(() => {
          window.location.reload()
        })
    }
  }
}
