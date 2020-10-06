// YourComponent.stories.tsx

import React from 'react';
import { PersonneItem } from '../component/personne';
import { Story,Meta } from '@storybook/react/types-6-0';
import api from '../interface/api'

// This default export determines where your story goes in the story list
export default {
    title: 'Personnes',
    component: PersonneItem, 
} as Meta;



const Template: Story<api> = (args) => <PersonneItem {...args} />;


export const CardDefault = Template.bind({});
CardDefault.args = {
  userId:66,
  id:7,
  title:"Create a new StoryBook",
  body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis excepturi, eaque dolores quisquam voluptate dolore adipisci modi est eveniet aut perspiciatis aliquam, quas, enim animi laudantium omnis voluptatibus nobis impedit?",
  option:"Advanced Option",
};

