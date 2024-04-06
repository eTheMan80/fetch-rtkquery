export interface ValidationError {
  message: string
}

interface ImageProps {
  id: string
  responsiveImage: {
    alt: string | null
    aspectRatio: number
    base64: string
    bgColor: string
    height: number
    sizes: string
    src: string
    srcSet: string
    title: string | null
    webpSrcSet: string
    width: number
  }
  focalPoint: {
    x: number
    y: number
  }
}

export interface SceneImages {
  lensType: string
  lensColour: string
  image: ImageProps
  secondaryImage: ImageProps | null
}

export interface SceneProps {
  nakedEyeImage: {
    focalPoint: {
      x: number
      y: number
    }
    id: string
    responsiveImage: {
      alt: string | null
      aspectRatio: number
      base64: string
      bgColor: string
      height: number
      sizes: string
      src: string
      srcSet: string
      title: string | null
      webpSrcSet: string
      width: number
    }
  }
  sceneImages: Record<string, SceneImages>
  sceneName: string
}

export interface Scene {
  data: SceneProps[] | null
}
