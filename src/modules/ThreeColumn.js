// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const CLASS_ROOT = 'three-column';

export default class ThreeColumn extends Component {
  constructor (props) {
    super(props);
  }

  _renderHeader () {
    const { headline, subHeadline } = this.props;

    let headlineMarkup;
    if (headline) {
      headlineMarkup = (
        <Heading tag="h2" strong={true} align="center">
          {headline}
        </Heading>
      );
    }

    let subHeadlineMarkup;
    if (subHeadline) {
      subHeadlineMarkup = (
        <Heading tag="h3" align="center" margin="none">
          {subHeadline}
        </Heading>
      );
    }

    if (headlineMarkup || subHeadlineMarkup) {
      return (
        <Box pad="small">
          {headlineMarkup}
          {subHeadlineMarkup}
        </Box>
      );
    }

    return undefined;
  }

  render () {
    const { colorIndex, children } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    return (
      <Box className={classes} align="center" colorIndex={colorIndex}
        pad={{vertical: 'medium'}}>
        {this._renderHeader()}
        <Box className={`${CLASS_ROOT}__content`} direction="row">
          {children}
        </Box>
      </Box>
    );
  }
};

ThreeColumn.propTypes = {
  headline: PropTypes.string,
  subHeadline: PropTypes.string,
  colorIndex: PropTypes.string
};
