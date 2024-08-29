import React, { ChangeEvent, useState } from "react"
import Thumbnail from "../Thumbnail"
import { useGetDataQuery } from "../../services/api/dataApiService"

const SceneImage = ({
  setImg,
  img,
  setImgIndex,
}: {
  setImg: (src: string, srcSet: string) => void
  img: { src: string; srcSet: string }
  setImgIndex: (index: number) => void
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("50")
  let { data: imgData } = useGetDataQuery(null)
  imgData = imgData ?? []

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <div className="image-wrapper basis-3/5 relative overflow-hidden z-10">
      <picture>
        <source srcSet={img.srcSet} type="image/jpg" />
        <img
          data-testid="default-image"
          className="rounded-tr-md rounded-br-md object-center object-cover"
          src={img.src}
          alt=""
        />
      </picture>
      <div
        className="absolute top-0 bottom-0 left-0 z-50 h-screen bg-slate-900 opacity-40"
        style={{ width: `${Number(inputValue)}%`, backgroundColor: "#fff" }}
      />
      <div
        className="w-14 h-14 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 flex justify-center items-center"
        style={{ left: `${Number(inputValue)}%` }}
      >
        &lt;&gt;
      </div>
      <input
        className="absolute top-1/2 -translate-y-1/2 opacity-0 z-100 cursor-grab h-full"
        type="range"
        min="5"
        max="95"
        step="0.01"
        style={{ left: "5%", right: "5%" }}
        onChange={handleChange}
      />
      <Thumbnail data={imgData} setImg={setImg} setImgIndex={setImgIndex} />
    </div>
  )
}

export default SceneImage
