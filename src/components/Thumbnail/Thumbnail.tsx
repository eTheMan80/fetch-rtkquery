import React, { Dispatch, SetStateAction } from "react"
import { SceneProps } from "../../App.interface"

const Thumbnail = ({
  data,
  setImg,
  setImgIndex,
}: {
  data: SceneProps[]
  setImg: Dispatch<SetStateAction<{ src: string; srcSet: string }>>
  setImgIndex: Dispatch<SetStateAction<number>>
}): JSX.Element => {
  const dataIsNotEmpty = Array.isArray(data) && data.length > 0

  const handleClick = (index: number, imgUrl: string, imgSrcSet: string) => {
    setImgIndex(index)
    setImg({
      src: imgUrl,
      srcSet: imgSrcSet,
    })
  }

  return (
    <div className="image-thumbnail bg-white px-3 py-3 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 rounded-lg flex flex-row justify-start z-1000">
      {dataIsNotEmpty &&
        data.map((img, index) => {
          return (
            <button
              data-testid={`btn-${img.sceneName}`}
              key={img.sceneName}
              onClick={() => {
                handleClick(
                  index,
                  img.nakedEyeImage.responsiveImage.src,
                  img.nakedEyeImage.responsiveImage.srcSet,
                )
              }}
            >
              <picture>
                <source
                  srcSet={img.nakedEyeImage.responsiveImage.srcSet}
                  type="image/jpg"
                />
                <img
                  data-testid={`image-thumbnail-${img.sceneName}`}
                  className="w-14 mr-2"
                  src={img.nakedEyeImage.responsiveImage.src}
                  alt=""
                />
              </picture>
            </button>
          )
        })}
    </div>
  )
}

export default Thumbnail
