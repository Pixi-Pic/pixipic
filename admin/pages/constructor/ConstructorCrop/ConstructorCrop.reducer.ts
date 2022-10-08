import { ConstructorCropActions } from './ConstructorCrop.actions';
import {
  ConstructorCropArea,
  ConstructorCropAspect,
  ConstructorCropPoint,
} from './ConstructorCrop.types';

export interface ConstructorCropState {
  zoom: number;
  source: string;
  area: ConstructorCropArea;
  aspect: ConstructorCropAspect;
  crop: ConstructorCropPoint;
}

export const constructorCropReducer = (
  state: ConstructorCropState,
  action: ConstructorCropActions.All
): ConstructorCropState => {
  switch (action.type) {
    case ConstructorCropActions.Types.SET_ZOOM:
      return { ...state, zoom: action.zoom };
    case ConstructorCropActions.Types.SET_AREA:
      return { ...state, area: action.area };
    case ConstructorCropActions.Types.SET_SOURCE:
      return { ...state, source: action.source };
    case ConstructorCropActions.Types.SET_CROP:
      return { ...state, crop: action.crop };
    default:
      return state;
  }
};
