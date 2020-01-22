import { default as _render } from './render';
import { default as _renderToJSON } from './renderToJSON';
import { makeSymbol as _makeSymbol } from './symbol';
import { SketchLayer, WrappedSketchLayer, PlatformBridge } from './types';
import { FileFormat1 as FileFormat } from '@sketch-hq/sketch-file-format-ts';

export async function render(
  element: React.ReactElement,
  container?: SketchLayer | WrappedSketchLayer,
  platformBridge: PlatformBridge = require('./platformBridges/NodeMacOSBridge'),
): Promise<SketchLayer | Array<SketchLayer>> {
  return _render(element, container, platformBridge);
}

export async function renderToJSON(
  element: React.ReactElement,
  platformBridge: PlatformBridge = require('./platformBridges/NodeMacOSBridge'),
): Promise<FileFormat.AnyLayer> {
  return _renderToJSON(element, platformBridge);
}

export async function makeSymbol(
  Component: React.ComponentType<any>,
  symbolProps?: string | SymbolMasterProps,
  document?: SketchDocumentData | SketchDocument | WrappedSketchDocument,
  bridge: PlatformBridge = require('./platformBridges/NodeMacOSBridge'),
) {
  return _makeSymbol(Component, symbolProps, document, bridge);
}

export * from './index.common';