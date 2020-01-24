import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { reducer } from "./reducers/index"
import thunk from "redux-thunk"
import logger from "redux-logger"
import "./index.css"
import App from "./components/App"

const store = createStore(reducer, applyMiddleware(thunk, logger))
console.log("Hi from the store", store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
