import { lightTheme, darkTheme } from "../theme"
import { createState, useStateDesigner } from "@state-designer/react"

let initial = "dark"

const canSaveLocally = process.browser && localStorage

// Get the initial theme from local storage, if there is one.
if (canSaveLocally) {
  const local = localStorage.getItem("__my_content_site_theme")
  if (local !== null) {
    initial = local
  }
}

// Persistent state.
const state = createState({
  data: { theme: initial },
  onEnter: "setBodyClass",
  on: {
    TOGGLED_THEME: ["toggleTheme", "saveToLocalStorage", "setBodyClass"]
  },
  actions: {
    toggleTheme(data) {
      data.theme = data.theme === "dark" ? "light" : "dark"
    },
    saveToLocalStorage(data) {
      if (canSaveLocally) {
        localStorage.setItem("__my_content_site_theme", data.theme)
      }
    },
    setBodyClass(data) {
      const className = data.theme === "dark" ? darkTheme : lightTheme
      if (canSaveLocally) {
        document.body.className = className
      }
    }
  }
})

export default function useTheme() {
  const {
    data: { theme }
  } = useStateDesigner(state)

  function toggle() {
    state.send("TOGGLED_THEME")
  }

  return { theme, toggle }
}
