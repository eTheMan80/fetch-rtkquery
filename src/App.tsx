import React, { useEffect, useState } from "react"
import "./App.css"
import Dropdown from "./components/Dropdown"
import SceneImage from "./components/SceneImage"
import { useGetDataQuery } from "./dataApiService"

export default function App() {
  const [img, setImg] = useState<{ src: string; srcSet: string }>({
    src: "",
    srcSet: "",
  })
  const [imgIndex, setImgIndex] = useState<number>(0)
  const { isLoading, isError, data: scene } = useGetDataQuery(null)
  const imgData = scene ?? []

  useEffect(() => {
    if (scene) {
      setImg({
        src: imgData[0].nakedEyeImage.responsiveImage.src,
        srcSet: imgData[0].nakedEyeImage.responsiveImage.srcSet,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene])

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

  if (isError) {
    return (
      <div
        data-testid="data-error"
        className="w-screen h-screen flex flex-col justify-center items-center text-center text-3xl"
      >
        <span>
          We haven&lsquo;t been able to load your information at this time.
        </span>
        <span>Please contact customer support to assist with this issue.</span>
      </div>
    )
  }
  return (
    <div id="app" className="App pt-5 pb-5">
      <div className="wrapper flex flex-row justify-center columns-2 overflow-hidden h-screen">
        <Dropdown data={scene} index={imgIndex} setImg={setImg} />
        <SceneImage setImg={setImg} img={img} setImgIndex={setImgIndex} />
      </div>
    </div>
  )
}
