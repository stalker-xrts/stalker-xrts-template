import { JSXNode, JSXXML } from "jsx-xml";

import { TTextureId } from "@/mod/globals/textures";
import { XrTexture } from "@/mod/ui/components/base/XrTexture.component";

interface IXrStaticProps {
  id?: string;
  /**
   * Enable custom tag name for button elements.
   */
  tag: "auto_static" | "dialog";
  x: number;
  y: number;
  height: number;
  width: number;
  stretch?: boolean;
  texture: TTextureId;
  children?: JSXNode;
}

/**
 * Generic component for rendering dialogs background.
 */
export function XrStatic({
  tag,
  id,
  x,
  y,
  width,
  height,
  texture,
  stretch = true,
  children = null
}: IXrStaticProps): JSXNode {
  return JSXXML(tag, {
    id,
    x,
    y,
    width,
    height,
    stretch: stretch ? "1" : "0"
  }, [
    <XrTexture id={texture}/>,
    children
  ]);
}
