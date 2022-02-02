import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HelloWorld } from './HelloWorld';

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => {
  return <HelloWorld {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
