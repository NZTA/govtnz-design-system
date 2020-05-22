// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';
import components__Header from '../../commons/examples/components__Header';
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

const PageContent = (props) => <React.Fragment><P styleSize="large">This is the header and main navigation of your site.</P>

<H2 styleSize="large" id="how-it-works">How it works</H2>
<p><code>Header</code> is a simple container component.</p>
<p>It must include your site&#39;s primary navigation. The <code>MainNav</code> component is an example of this.</p>
<h2 id="examples">Examples</h2>
<p>Interact with each example to see how it works.</p>
<p>Please note that only the <code>Header</code>, <code>MainNav</code> and <code>MainNavLink</code> components are part of the example. The other HTML/components are for example purposes only and are optional.</p>
<ExampleContainer>
    <Example  code={components__Header[0]} iframeProps={{
        id:"iframe_componentsHeader0",
        className: "example__iframe",
        src:"/components/Header__example0.html",
        title:"Example: Header containing a MainNav",
        height: 322
      }}></Example>
</ExampleContainer>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Header"}
      id={"Header"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
