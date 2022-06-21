import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph } from '../src/molecules/paragraph/Paragraph';
import { TextList } from '../src/organisms/textlist/TextList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Organism/TextList',
  component: TextList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextList {...args} />;

export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
List.args = {
  children: <li><Paragraph><Text label='Primo'></Text><Text label=' elemento'></Text></Paragraph></li>
};

export const List2 = Template.bind({});
const a = Text({label: "ciao"});
List2.args = {
  children: <li>{a}</li>,
};
