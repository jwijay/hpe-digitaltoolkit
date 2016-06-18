// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var TwoColumn = require('../../modules/TwoColumn');
var Anchor = require('grommet/components/Anchor');
var Box = require('grommet/components/Box');
var Heading = require('grommet/components/Heading');
var Image = require('grommet/components/Image');
var Paragraph = require('grommet/components/Paragraph');
var LinkNextIcon = require('grommet/components/icons/base/LinkNext');

TwoColumn.displayName = 'TwoColumn';

var inlineJSX = (
  <TwoColumn headline="Headline Text">
    <Box>Column Content</Box>
    <Box>Column Content</Box>
  </TwoColumn>
);
var inline = jsxToString(inlineJSX);

var TwoColumnDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _renderCode(name, jsx) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="example">
          {jsx}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(jsx)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var columnContentImage = (
      <Box pad="small">
        <Box pad={{vertical: 'small'}}>
          <Image src="/docs/img/Hero4_marquee.jpg" full="horizontal" />
        </Box>
      </Box>
    );

    var columnContent = (
      <Box pad="small">
        <Box pad={{vertical: 'small'}}>
          <Image size="thumb" src="/docs/img/cubes.svg" />
        </Box>
        <Heading tag="h4" strong={true} margin="none">
          Manage the Rising Cost of Regulatory Compliance and Data Retention
        </Heading>
        <Paragraph size="medium" margin="none">
          The evolving threat environment and increased pace of business change creates costly compliance and data backup challenges. At HPE we think your data deserves better. HPE helps you adapt and stay compliant. Efficiently protect and govern your data to keep compliance costs down while saving money on regulatory fines and data loss.
        </Paragraph>
        <Box pad={{vertical: 'small', between: 'small'}}>
          <Anchor href="#" icon={<LinkNextIcon />} label="Learn How to Backup with Brains to Plan, Prioritize, Automate and Predict Future Data Protection Needs" />
          <Anchor href="#" icon={<LinkNextIcon />} label="Learn How to Accelerate Compliance and Protect Your Business from Risk with Information Governance" />
        </Box>
      </Box>
    );

    var twoColumn = (
      <TwoColumn headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA"
        colorIndex="light-2">
        {columnContentImage}
        {columnContent}
      </TwoColumn>
    );

    var columnThirtySixty = (
      <TwoColumn mainColumn="end"
        headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA"
        colorIndex="light-2">
        {columnContentImage}
        {columnContent}
      </TwoColumn>
    );

    var columnSixtyThirty = (
      <TwoColumn mainColumn="start"
        headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA"
        colorIndex="light-2">
        {columnContent}
        {columnContentImage}
      </TwoColumn>
    );

    return (
      <DocsArticle title="TwoColumn" colorIndex="neutral-3">

        <p>The TwoColumn module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>TwoColumn Options</h2>
          <dl>
            <dt><code>headline            {'{string}'}</code></dt>
            <dd>Headline of the columns.</dd>
            <dt><code>subHeadline         {'{string}'}</code></dt>
            <dd>Content for the subtext.</dd>
            <dt><code>mainColumn          start|end</code></dt>
            <dd>Set the main column to the start (66/33) or end (33/66). Defaults to 50/50.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Two Column', twoColumn)}
          {this._renderCode('Two Column - 33-66', columnThirtySixty)}
          {this._renderCode('Two Column - 66-33', columnSixtyThirty)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = TwoColumnDoc;
