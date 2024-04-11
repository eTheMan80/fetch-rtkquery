import React, { ChangeEvent, Fragment } from "react"
import { SceneProps, SceneImages } from "../../App.interface"

const Dropdown = ({
  data,
  index,
  setImg,
}: {
  data: SceneProps[] | undefined
  index: number
  setImg: (src: string, srcSet: string) => void
}): JSX.Element => {
  const imgsArray = data && Object.values(data[index].sceneImages)
  const dataIsNotEmpty = Array.isArray(imgsArray) && imgsArray.length > 0
  const updateImgUrl = (obj: false | SceneImages | undefined) => {
    if (!obj) return
    setImg(obj.image.responsiveImage.src, obj.image.responsiveImage.srcSet)
    return obj
  }
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const findImgObj = imgsArray?.find((item) => item.image.id === value)
    updateImgUrl(findImgObj)
  }
  return (
    <div className="bg-white basis-1/4 rounded-tl-md rounded-bl-md pt-12 pl-5 pr-5">
      <form>
        <select
          data-testid="image-select"
          className="image-select w-3/4 border-2 border-solid rounded-md border-gray-300"
          onChange={handleChange}
        >
          <option value="" hidden>
            Please select an image
          </option>
          {dataIsNotEmpty &&
            imgsArray.map((scene) => {
              return (
                <Fragment key={scene.image.id}>
                  <option
                    key={`${scene.lensType}-${scene.lensColour}`}
                    value={scene.image.id}
                    data-testid="select-option"
                  >
                    {`${scene.lensType} ${scene.lensColour}`}
                  </option>
                </Fragment>
              )
            })}
        </select>
      </form>
    </div>
  )
}

export default Dropdown
