import { render, JSXNode } from "jsx-xml";

/**
 * Render received node to text for saving.
 */
export function renderJsxToXmlText(node: JSXNode): string {
  const autoGeneratedComment: string = `<!-- Generated by xrts util at: ${new Date().toString()} -->\n\n`;

  return (
    autoGeneratedComment +
    render(node, {
      createOptions: { headless: true },
      endOptions: { allowEmpty: true, pretty: true }
    })
  );
}