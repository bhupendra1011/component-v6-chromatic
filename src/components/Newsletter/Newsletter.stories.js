import React from "react";
import {Primary } from "../Button/Button.stories";
import {Large} from "../Input/Input.stories";

export default {
    title:'Molecules/Newsletter',
}

export const PrimarySubscription = () => (
    <>
    <Large/>
    <Primary primary="true" label="Submit"/>
    </>
)

PrimarySubscription.storyName = "Subscription Box"
