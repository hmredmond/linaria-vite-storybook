import React from 'react';
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Subheading,
} from '@storybook/addon-docs';

/**
 * Docs component to render docs page for storybook stories.
 * Title is optional, if you don't pass it, it will just render
 * the default title of the component
 */
export const Docs = ({ title }) => (
  /* https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks */
  <>
    <Title>{title}</Title>
    {/* https://storybook.js.org/docs/react/writing-docs/doc-block-description */}
    <Description />
    {/* Renders the first story of the component */}
    <Primary />
    <Subheading>Props</Subheading>
    {/* https://storybook.js.org/docs/react/writing-docs/doc-block-argstable */}
    <ArgsTable />
    {/* Renders all the stories for the component */}
    <Stories />
  </>
);

export default { Docs };
