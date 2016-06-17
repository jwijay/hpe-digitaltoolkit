// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

const CLASS_ROOT = 'column-content';

export default class ColumnContent extends Component {
  constructor (props) {
    super(props);
  }

  _renderLinks () {
    const { links } = this.props;

    if (links) {
      const linkList = links.map(({ link, linkText }, key) => {
        return <Anchor key={key} href={link} icon={<LinkNextIcon />} label={linkText} />;
      });

      return (
        <Box pad={{vertical: 'small', between: 'small'}}>
          {linkList}
        </Box>
      );
    }

    return undefined;
  }

  render () {
    const { image, title, description, icon } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let imageMarkup;
    if (image) {
      imageMarkup = (
        <Box pad={{vertical: 'small'}}>
          <Image src={image} full="horizontal" />
        </Box>);
    }

    let titleMarkup;
    if (title) {
      titleMarkup = (
        <Heading tag="h4" strong={true} margin="none">
          {title}
        </Heading>
      );
    }

    let descriptionMarkup;
    if (description) {
      descriptionMarkup = (
        <Paragraph size="medium" margin="none">
          {description}
        </Paragraph>
      );
    };

    let iconMarkup;
    if (icon) {
      iconMarkup = (
        <Box pad={{vertical: 'small'}}>
          <img className={`${CLASS_ROOT}__icon`} src={icon} />
        </Box>);
    }

    return (
      <Box className={classes} pad="small">
        {imageMarkup}
        {iconMarkup}
        {titleMarkup}
        {descriptionMarkup}
        {this._renderLinks()}
      </Box>
    );
  }
};

ColumnContent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    linkText: PropTypes.string
  }))
};
