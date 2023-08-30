import { useEffect, useState } from "preact/hooks"

import { Kratos } from "../packages/kratos-auth/auth.ts"

export const useSession = () => {
  const [session, setSession] = useState<string>("No valid Ory Session was found.\nPlease sign in to receive one.")
  const [hasSession, setHasSession] = useState<boolean>(false)

  useEffect(() => {
    Kratos.toSession
      .fn()
      .then((data) => {
        console.log(data)
        // setSession(JSON.stringify(data, null, 2))
        // setHasSession(true)
      })
      .catch((err: any) => {
        console.log(err)
        switch (err.response?.status) {
          case 403:
            // This is a legacy error code thrown. See code 422 for
            // more details.
            return
          case 422:
            // This status code is returned when we are trying to
            // validate a session which has not yet completed
            // its second factor
            return
          case 401:
            // do nothing, the user is not logged in
            return
        }

        // Something else happened!
        return Promise.reject(err)
      })
  })
}
