import router from "next/router"
import { useEffect, useRef } from "react"
import { state as searchState } from "./useSearch"
import throttle from "lodash/throttle"

export default function useTransition() {
  const rElm = useRef<HTMLElement>(null)

  useEffect(() => {
    rElm.current?.classList.add("faded")
    rElm.current?.classList.add("fadingIn")

    router.events.on(
      "routeChangeStart",
      throttle(() => {
        const elm = rElm.current
        if (!elm) return
        elm.classList.remove("fadingIn")
        searchState.send("STARTED_CHANGING_ROUTE")
      }, 100)
    )

    router.events.on(
      "routeChangeComplete",
      throttle(() => {
        const elm = rElm.current
        if (!elm) return
        elm.classList.add("fadingIn")
        searchState.send("STOPPED_CHANGING_ROUTE")
      }, 100)
    )
  }, [])

  return rElm
}
