import router from "next/router"
import { PostLite } from "../../types"
import { createState, useStateDesigner } from "@state-designer/react"
import { getSearchResults } from "../../lib/getSearchResults"

export const state = createState({
  data: {
    inputValue: "",
    query: "",
    predictions: [] as PostLite[]
  },
  initial: "closed",
  states: {
    closed: {
      on: {
        TOGGLED_OPEN: { to: "open" }
      }
    },
    open: {
      on: {
        TOGGLED_OPEN: { to: "closed" }
      },
      initial: {
        if: "inputValueIsEmpty",
        to: "empty",
        else: { to: "full" }
      },
      states: {
        empty: {
          on: {
            CHANGED_INPUT_VALUE: { do: "setInputValue", to: "full" }
          }
        },
        full: {
          on: {
            CHANGED_INPUT_VALUE: {
              do: "setInputValue",
              to: "enteringValue"
            },
            SUBMITTED_SEARCH: {
              do: ["setQuery", "navigateToSearchPage"],
              to: "hidingPredictions"
            }
          },
          initial: "typing",
          states: {
            enteringValue: {
              onEnter: [
                { do: "setInputValue" },
                { if: "inputValueIsEmpty", to: "empty" },
                { to: "typing" }
              ]
            },
            typing: {
              onEnter: {
                wait: 0.25,
                do: "setQuery",
                to: "searching"
              }
            },
            searching: {
              onEnter: { do: "setPredictions", to: "searched" }
            },
            hidingPredictions: {},
            searched: {
              initial: {
                if: "predictionsIsEmpty",
                to: "noPredictions",
                else: { to: "hasPredictions" }
              },
              states: {
                noPredictions: {},
                hasPredictions: {}
              }
            }
          }
        }
      }
    }
  },
  conditions: {
    predictionsIsEmpty(data) {
      return data.predictions.length === 0
    },
    inputValueIsEmpty(data) {
      return data.inputValue === ""
    },
    inputValueIsQuery(data) {
      return data.inputValue === data.query
    }
  },
  actions: {
    setQuery(data) {
      data.query = data.inputValue
    },
    navigateToSearchPage(data) {
      router.push("/search?q=" + data.query)
    },
    setInputValue(data, payload = "") {
      data.inputValue = payload
    },
    clearPredictions(data) {
      data.predictions = []
    },
    setPredictions(data) {
      data.predictions = getSearchResults(data.query)
    }
  }
})

export default function useSearch() {
  const local = useStateDesigner(state)

  return local
}

// --- Debugging
// state.onUpdate(update => console.log(update.active))
