
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import renderToHTML from './renderToHTML';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    transformSource: (src, storyContext) => src + "\n\n" + renderToHTML(storyContext.storyFn),
  },
  backgrounds:
  {
    default:'light',
    values: [
      {
        name:'light',
        value:"#ffffff"
      },
      {
        name:'dark',
        value:"#050449"
      }
    ]
  }  
}

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);