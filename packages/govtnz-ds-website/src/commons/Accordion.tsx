import React, { Component, Fragment } from 'react';
import { Details, Summary } from 'react-accessible-details';

import iconQuestionMark from './svgs/icon-question-mark-in-dark-circle.svg';
import noticeNumber from './images/notice-number-locations.jpg';

import A from '@govtnz/ds/build/react-ts/A';

import Icon from '../components/Icon';
import P from '@govtnz/ds/build/react-ts/P';


type Props = {
  // iframeProps: React.IframeHTMLAttributes<HTMLIFrameElement>;
  // code: AnyObject;
};

type State = {
  hasClickedExpand: boolean;
};

export default class Accordion extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasClickedExpand: false,
    };
  }
  
  clickFormat = () => {
    const { hasClickedExpand } = this.state;
    if (hasClickedExpand) {
      return;
    }
    // trackFormat(formatId);
    this.setState({ hasClickedExpand: true });
    // this.resetFormatChoice();
  };


  render() {
    return (
      <div className="accordion">
            <Details className="example__details" onChange={this.clickFormat}>
              <Summary className="example__summary">
                <Icon
                  className="icon"
                  role="presentation"
                  id={iconQuestionMark.id}
                />
                <span className="example__summary-text">Where do I find the notice number?</span>
              </Summary>
             
              <div>
                <img src={noticeNumber} alt="Where do I find the notice Number" />;
              </div>
            </Details>
      </div>
    );
  }
}

type AnyObject = {
  [key: string]: string | number;
};
