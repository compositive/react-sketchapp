import { URL } from 'whatwg-url';

import { PlatformBridge } from '../../types';
import { createStringMeasurer } from './createStringMeasurer';
import { findFontName } from './findFontName';
import readFile from './readFile';

const SketchBridge: PlatformBridge = {
  // @ts-ignore – @types/whatwg-url doesn't match Node.js global.URL
  URL,
  createStringMeasurer,
  findFontName,
  fetch,
  readFile,
};

export default SketchBridge;
