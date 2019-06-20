// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import DateInput from '@govtnz/ds/build/react-ts/DateInput.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <DateInput
 {...onChangeGenerator(DateInput
)}            id="passport-issued"
            hintId="passport-issued-hint"
            dayId="passport-issued-day"
            monthId="passport-issued-month"
            yearId="passport-issued-year"
            label="When was your passport issued?"
            hint="For example, 12 11 2007"
            maxLength="2"
            maxLength2="2"
            maxLength3="4"
        />
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
