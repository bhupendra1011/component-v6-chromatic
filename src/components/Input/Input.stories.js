import React from 'react';
import Input from './Input';

// component story format
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title:'Atoms/Input',
    component: Input
}

//below named export would be represet a story
export const Small = () =>  <Input size='small' placeholder='Small size'/> 
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () =>  <Input size='large' placeholder='Large size'/> 

Small.storyName = 'Small Input'
Medium.storyName = 'Medium Input'
Large.storyName = 'Large Input'