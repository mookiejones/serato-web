import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';
import DatabaseComponent from './DatabaseComponent';


export default {
    title:'Example/DatabaseComponent',
    component:DatabaseComponent,
    parameters:{
        layout:'fullscreen'
    }

} as ComponentMeta<typeof DatabaseComponent>;

const Template:ComponentStory<typeof DatabaseComponent> = (args:any)=><DatabaseComponent {...args}/>

export const Database = Template.bind({});
