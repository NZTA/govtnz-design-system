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
// import ComponentCode from '../../commons/component-code';

import PatternsPage from '../../components/PatternsPage';
import Accordion from '../../commons/Accordion';

import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment>
<Accordion />

</React.Fragment>

export default function Code(props) {
  return (
    <PatternsPage
      PageContent={PageContent}
    />
  );
}
