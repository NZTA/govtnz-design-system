// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';
import components__A from '../../commons/examples/components__A';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import MainNavMobileMenuContext from '../../commons/MainNavMobileMenuContext';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><p>Headings are structural parts of your page, ranging from 1 (most important) to 6 (least important), and are used by screen readers to understand the relationship between parts of your page. They are for headings, but they also denote the hierarchy of your page.</p>
<H2 styleSize="large" id="how-to-use">How to use</H2>
<p>First choose a heading level based on the structure of your page, and then choose the appropriate font size for your design as the font size can be chosen independently, but do not conflate these decisions as they are strictly unrelated.</p>
<ExampleContainer>
    <ExampleHeading>Example of a Link</ExampleHeading>
    <Example  code={components__A[0]} iframeProps={{
        id:"iframe_componentsA0",
        className: "example__iframe",
        src:"/components/A__example0.html",
        title:"Example of a Link",
        height: 130
      }}></Example>
</ExampleContainer>

<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"A"}
      id={"A"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
