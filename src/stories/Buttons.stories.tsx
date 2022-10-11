import { Button } from '../shared/atom/Buttons/index'
import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
     title: 'Components/Button',
     component: Button,
     argTypes: {
          text: { control: 'text' , description:"Button text Visible to User", defaultValue:"Button" },
          size: { control: 'radio', options: [ "small", "middle","large", "default"] ,  defaultValue : 'default'},
          variant: { control: 'select', options: ["primary", "secondary", "tertiary", "ghost"] , defaultValue:"primary"},
          onClick: {action : 'HanldeClick'},
          isLoading : { control: 'boolean' , description:"Button text Visible to User" ,defaultValue : false  },
     }
} as ComponentMeta<typeof Button>;

export const ButtonStory: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;
