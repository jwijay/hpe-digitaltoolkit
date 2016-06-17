// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const CLASS_ROOT = 'two-column';

export default class TwoColumn extends Component {
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
        <Heading tag="h3" strong={true} align="center">
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
    const { mainColumn, colorIndex, children } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--50-50`]: !mainColumn,
        [`${CLASS_ROOT}--33-66`]: mainColumn === 'end',
        [`${CLASS_ROOT}--66-33`]: mainColumn === 'start'
      },
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

TwoColumn.propTypes = {
  headline: PropTypes.string,
  subHeadline: PropTypes.string,
  mainColumn: PropTypes.oneOf(['start', 'end']),
  colorIndex: PropTypes.string
};
