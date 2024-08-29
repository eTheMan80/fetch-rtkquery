import { ImageStateProps } from "../../App.interface"

export type InitialState = {
  img: ImageStateProps,
  imgIndex: number
}

export type ActionTypes = { type: 'updateImg', payload: ImageStateProps } | { type: 'updateImgIndex', payload: number }

export const initialState: InitialState = {
  img: {
    src: '', srcSet: ''
  },
  imgIndex: 0
}

export const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'updateImg':
      return { ...state, img: action.payload }
    case 'updateImgIndex':
      return { ...state, imgIndex: action.payload }
    default:
      return state
  }
}