import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph } from '../src/molecules/paragraph/Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paragraph {...args} />;

export const Par = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Par.args = {
  children:<><Text label={"label"}></Text><Text label={"label"}></Text></>
};

export const Par2 = Template.bind({});
const a = Text({label: "ciao"});
Par2.args = {
  children: a,
};
