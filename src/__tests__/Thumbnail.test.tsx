import { expect, test } from "vitest"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../services/store/store"
import Thumbnail from "../components/Thumbnail"
import { imgDataArray } from "../services/api/data/mockData"

test("image thumbnails have been rendered", async () => {
  const thumbnail = render(
    <Provider store={store}>
      <Thumbnail
        data={imgDataArray}
        setImg={() => null}
        setImgIndex={() => null}
      />
    </Provider>,
  )

  const imgThumbnailOne = (await thumbnail.findByTestId(
    "image-thumbnail-Road",
  )) as HTMLImageElement
  const imgThumbnailTwo = (await thumbnail.findByTestId(
    "image-thumbnail-Mountain",
  )) as HTMLImageElement
  const imgThumbnailThree = (await thumbnail.findByTestId(
    "image-thumbnail-Beach",
  )) as HTMLImageElement

  expect(imgThumbnailOne.src).toContain("1655827671-road-naked.jpg")
  expect(imgThumbnailTwo.src).toContain("1655815211-mountain-naked.jpg")
  expect(imgThumbnailThree.src).toContain("1655822607-beach-naked.jpg")
  thumbnail.unmount()
})
