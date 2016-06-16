// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

const CLASS_ROOT = 'one-column';

export default class OneColumn extends Component {
  constructor (props) {
    super(props);
  }

  _renderCTA () {
    const { ctaText, link, onClick } = this.props;

    if (ctaText) {
      return (
        <Box pad={{vertical: 'small'}}>
          <Button label={ctaText.toUpperCase()} href={link} onClick={onClick} />
        </Box>
      );
    }

    return undefined;
  }

  render () {
    const { headline, subHeadline, description, icon } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

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
        <Heading tag="h3"strong={true} align="center">
          {subHeadline}
        </Heading>
      );
    }

    let descriptionMarkup;
    if (description) {
      descriptionMarkup = (
        <Paragraph size="large" margin="none" align="center">
          {description}
        </Paragraph>
      );
    };

    let iconMarkup;
    if (icon) {
      iconMarkup = (
        <Box pad={{vertical: 'small'}}>
          {icon}
        </Box>
      );
    }

    return (
      <Box className={classes} align="center" colorIndex="light-2" pad={{horizontal: 'small', vertical: 'medium'}}>
        {iconMarkup}
        {headlineMarkup}
        {subHeadlineMarkup}
        {descriptionMarkup}
        {this._renderCTA()}
      </Box>
    );
  }
};

OneColumn.propTypes = {
  headline: PropTypes.string,
  subHeadline: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  icon: PropTypes.element,
  link: PropTypes.string,
  onClick: PropTypes.func
};
