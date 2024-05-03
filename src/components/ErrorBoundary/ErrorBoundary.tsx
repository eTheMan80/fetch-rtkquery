import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError(): State {
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-center text-3xl">
          <span>
            We haven&lsquo;t been able to load your information at this time.
          </span>
          <span>
            Please contact customer support to assist with this issue.
          </span>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
