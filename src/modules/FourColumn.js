// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';

const CLASS_ROOT = 'four-column';

export default class FourColumn extends Component {
  constructor (props) {
    super(props);
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
        <Box className={`${CLASS_ROOT}__content`} direction="row" wrap={true}>
          {children}
        </Box>
      </Box>
    );
  }
};

FourColumn.propTypes = {
  colorIndex: PropTypes.string
};
