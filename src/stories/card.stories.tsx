// YourComponent.stories.tsx

import React from 'react';
import { CardItem } from '../component/card';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardInterface from '../interface/interfaces'

// This default export determines where your story goes in the story list
export default {
    title: 'Card',
    component: CardItem,
} as Meta;



const Template: Story<CardInterface> = (args) => <CardItem {...args} />;


export const CardBasic = Template.bind({});
CardBasic.args = {
    CardText:"Le text",
    CardTitle:"Le titre",
};

