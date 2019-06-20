// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '../../commons/styles/ds/themed-Li.scss';
import basics__typography from '../../commons/examples/basics__typography';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import BasicsPage from '../../components/basicsPage';
// import BaseCode from '../../components/baseCode'
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><P styleSize="large">Effective, accessible content relies on a clear font, consistent headings, succinct body text paragraphs, descriptive links, and scannable lists.</P>

<H2 {...onChangeGenerator(H2)} styleSize="large" id="font">Font</H2>
<p>We are investigating how font choice will be incorporated into the design system, in order to meet New Zealand language requirements.</p>
<h2 id="headings">Headings</h2>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[0]} iframeProps={{
        id:"iframe_basicstypography0",
        className: "example__iframe",
        src:"/basics/typography__example0.html",
        title:"Example 1",
        height: 50
      }}></Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Same heading level varying by size only</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[1]} iframeProps={{
        id:"iframe_basicstypography1",
        className: "example__iframe",
        src:"/basics/typography__example1.html",
        title:"Same heading level varying by size only (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>Use headings consistently to create a clear hierarchy throughout your content, and to allow people using assistive technology to quickly scan and move through the page.</p>
<p>Mark up headings semantically using the appropriate <code>&lt;h#&gt;</code> level HTML element. In our design system, the font size is independent of the heading hierarchy. This allows for design flexibility.</p>
<p>Write all headings in sentence case, with the exception of proper nouns, which require initial capitals.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Headings with captions</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[2]} iframeProps={{
        id:"iframe_basicstypography2",
        className: "example__iframe",
        src:"/basics/typography__example2.html",
        title:"Headings with captions (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>Sometimes you may need to make it clear that content under a heading is part of a larger section or group. To do this, you can use a heading with a caption.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Headings with captions inside the       <code>h1</code></ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[3]} iframeProps={{
        id:"iframe_basicstypography3",
        className: "example__iframe",
        src:"/basics/typography__example3.html",
        title:"Headings with captions inside the       h1 (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>If the caption should be considered part of the page heading, you can also nest the caption within the <code>h1</code>.</p>
<h2 id="paragraphs">Paragraphs</h2>
<p>There are three font sizes for paragraphs, giving you:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>a large size for lead paragraphs</Li>
<Li {...onChangeGenerator(Li)}>a medium size for standard body text</Li>
<Li {...onChangeGenerator(Li)}>a smaller size for small body text.</Li>
</Ul>
<p>You can use these text sizes to indicate the relative importance of the content on the page.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Large size for lead paragraph</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[4]} iframeProps={{
        id:"iframe_basicstypography4",
        className: "example__iframe",
        src:"/basics/typography__example4.html",
        title:"Large size for lead paragraph (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>A lead paragraph, also called a summary or short description, is the introduction at the top of a page that summarises what a user can expect from that page.</p>
<p>Remember that the summary, along with the title, is usually what users see in search results. Keep the content short, or put the key information at the start, as Google usually only shows the first 160 characters.</p>
<p>Only use one lead paragraph per page.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Medium size for standard body text</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[5]} iframeProps={{
        id:"iframe_basicstypography5",
        className: "example__iframe",
        src:"/basics/typography__example5.html",
        title:"Medium size for standard body text (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>The majority of your body copy should use medium size.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Small size for small body text</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[6]} iframeProps={{
        id:"iframe_basicstypography6",
        className: "example__iframe",
        src:"/basics/typography__example6.html",
        title:"Small size for small body text (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>Use it sparingly for &#39;small print&#39; content, such as notes and references.</p>
<h2 id="links">Links</h2>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Default</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[7]} iframeProps={{
        id:"iframe_basicstypography7",
        className: "example__iframe",
        src:"/basics/typography__example7.html",
        title:"Default (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.</p>
<p>Remember to make link text descriptive of the destination. Just “Read more” is not acceptable.</p>
<h2 id="lists">Lists</h2>
<p>Use lists to break up blocks of text into chunks to make them easier to read.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
<ExampleHeading {...onChangeGenerator(ExampleHeading)}>Bulleted lists</ExampleHeading>
<Example {...onChangeGenerator(Example)}  code={basics__typography[8]} iframeProps={{
        id:"iframe_basicstypography8",
        className: "example__iframe",
        src:"/basics/typography__example8.html",
        title:"Bulleted lists (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>Introduce bulleted lists with a partial ‘stub’ sentence ending in a colon. Start each list item with a lowercase letter, and do not use a full stop at the end. Ensure each list item makes grammatical sense when read after the stub sentence above.</p>
<p>Use bulleted lists to highlight options and examples in content, especially when a sentence contains more than three clauses.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Numbered lists</ExampleHeading>
    <Example {...onChangeGenerator(Example)}  code={basics__typography[9]} iframeProps={{
        id:"iframe_basicstypography9",
        className: "example__iframe",
        src:"/basics/typography__example9.html",
        title:"Numbered lists (typography example)",
        height: 50
      }}></Example>
</ExampleContainer>

<p>Use numbered lists instead of bulleted lists when the order of the items is relevant.</p>
<p>You do not need a lead-in line for numbered lists, although a summary sentence can be helpful for users. If numbered items are complete sentences, use full stops at the end.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <BasicsPage
      title={"typography"}
      id={"typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
