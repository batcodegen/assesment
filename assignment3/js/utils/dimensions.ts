import {PixelRatio, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on mockup dimension
const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

/**
 *
 * @param size size of font, width, height
 * @param based width | height
 * @returns pixel ratio based on device
 */
function normalize(size: number, based: string = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/**
 *
 * @param size width size
 * @returns modified width acc to device width
 */
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

/**
 *
 * @param size height size
 * @returns modified height acc to device width
 */
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

/**
 *
 * @param size font size
 * @returns modified fontsize acc to device width
 */
const fontPixel = (size: number) => {
  return heightPixel(size);
};

/**
 *
 * @param size Margin and Padding vertical pixel
 * @returns vertical height distance acc to device width
 */
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};

/**
 *
 * @param size Margin and Padding horizontal pixel
 * @returns horizontal width distance acc to device width
 */
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
