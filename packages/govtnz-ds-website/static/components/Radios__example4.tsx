// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';import H1 from '@govtnz/ds/build/react-ts/H1.tsx';import RadioBlockWithHint from '@govtnz/ds/build/react-ts/RadioBlockWithHint.tsx';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Radio button items with hints" {...onChangeGenerator({})}>
            <FieldsetBlock legend={<H1 styleSize="large" id="providerChoiceTitle1">Choose one provider</H1>} hint={<p>Select one provider.</p>} hintId="hintId" {...onChangeGenerator({})}>
                <RadioBlockWithHint label="Sign in with Aardvark services" hint="North Island only" hintId="someHintId7" radioId="anyRadioId7234" name="providerChoice3" value="provider1" labelId="labelId5" {...onChangeGenerator({"value":"provider1"})}></RadioBlockWithHint>
                <RadioBlockWithHint label="Sign in with Bumblebee services" hint="North and South Island" hintId="someHintId8" radioId="anyRadioId8234" name="providerChoice3" value="provider2" labelId="labelId8" {...onChangeGenerator({"value":"provider2"})}></RadioBlockWithHint>
                <RadioBlockWithHint label="Sign in with Caterpillar company" hint="All new Zealand territories" hintId="someHintId7234" radioId="anyRadioId9f" name="providerChoice3" value="provider3" labelId="labelId9" {...onChangeGenerator({"value":"provider3"})}></RadioBlockWithHint>
        </FieldsetBlock>
    </Example>);

      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
        return {
          value,
          value2,
          value3,
          onChange: e => setValue(e.target.value),
          onChange2: e => setValue2(e.target.value),
          onChange3: e => setValue3(e.target.value),
        };
      };
    
      document.addEventListener('DOMContentLoaded', () => {
        const selector = '#root';
        const root = document.querySelector(selector);
        if (!root) {
          console.error("Couldn't find app mount point ", selector);
          return;
        }
        ReactDOM.hydrate(<PageContent />, root, window.afterRender);
      });
      