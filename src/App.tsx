import React, { useEffect, useReducer } from "react"
import "./App.css"
import Dropdown from "./components/Dropdown"
import SceneImage from "./components/SceneImage"
import ErrorBoundary from "./components/ErrorBoundary"
import { useGetDataQuery } from "./dataApiService"
import { initialState, reducer } from "./reducer"

function App() {
  const [{ img, imgIndex }, dispatch] = useReducer(reducer, initialState)
  const { isLoading, error, data: scene } = useGetDataQuery(null)
  const imgData = scene ?? []

  const updateImgObj = (src: string, srcSet: string) => {
    dispatch({
      type: "updateImg",
      payload: {
        src,
        srcSet,
      },
    })
  }

  const updateImgIndex = (index: number) => {
    dispatch({
      type: "updateImgIndex",
      payload: index,
    })
  }

  useEffect(() => {
    if (scene) {
      dispatch({
        type: "updateImg",
        payload: {
          src: imgData[0].nakedEyeImage.responsiveImage.src,
          srcSet: imgData[0].nakedEyeImage.responsiveImage.srcSet,
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene])

  useEffect(() => {
    if (error) {
      throw new Error("Failed to load data!!")
    }
  }, [error])

  if (isLoading) {
    return (
      <div
        data-testid="loading"
        className="w-screen h-screen flex flex-col justify-center items-center text-center text-3xl"
      >
        Please wait while we load your information.
      </div>
    )
  }

  return (
    <div id="app" className="App pt-5 pb-5">
      <div className="wrapper flex flex-row justify-center columns-2 overflow-hidden h-screen">
        <Dropdown data={scene} index={imgIndex} setImg={updateImgObj} />
        <SceneImage
          setImg={updateImgObj}
          img={img}
          setImgIndex={updateImgIndex}
        />
      </div>
    </div>
  )
}

export default function AppErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
