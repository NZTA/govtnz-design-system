// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <InputBlock {...onChangeGenerator(InputBlock)} type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId" hintId="anyHintId" />
    </Example>);

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#root';
  const root = document.querySelector(selector);
  if (!root) {
    console.error("Couldn't find app mount point ", selector);
    return;
  }
  ReactDOM.render(<PageContent />, root);
});