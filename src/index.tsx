import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import store from "./services/store/store"

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const container = document.getElementById("root")

if (!container) {
  throw new Error("no container to render to!!!")
}
const root = createRoot(container as HTMLElement)
root.render(<AppContainer />)
