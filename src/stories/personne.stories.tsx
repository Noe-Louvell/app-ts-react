// YourComponent.stories.tsx

import React from 'react';
import { Card, CardProps } from '../component/card';
import { Story } from '@storybook/react/types-6-0';


// This default export determines where your story goes in the story list
export default {
    title: 'Card',
    component: Card,
};



const Template: Story<CardProps> = (args) => <Card {...args} />;


export const FirstStory = Template.bind({});
FirstStory.args = {
  /* the args you need here will depend on your component */
};