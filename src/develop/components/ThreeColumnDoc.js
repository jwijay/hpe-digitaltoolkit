// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var ThreeColumn = require('../../modules/ThreeColumn');
var Anchor = require('grommet/components/Anchor');
var Box = require('grommet/components/Box');
var Heading = require('grommet/components/Heading');
var Image = require('grommet/components/Image');
var Paragraph = require('grommet/components/Paragraph');
var LinkNextIcon = require('grommet/components/icons/base/LinkNext');

ThreeColumn.displayName = 'ThreeColumn';

var inlineJSX = (
  <ThreeColumn headline="Headline Text">
    <Box>Column Content</Box>
    <Box>Column Content</Box>
    <Box>Column Content</Box>
  </ThreeColumn>
);
var inline = jsxToString(inlineJSX);

var ThreeColumnDoc = React.createClass({

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
    var columnContent = (
      <Box pad="small">
        <Box pad={{vertical: 'small'}}>
          <Image src="/docs/img/Hero4_marquee.jpg" full="horizontal" />
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

    var threeColumn = (
      <ThreeColumn headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA"
        colorIndex="light-2">
        {columnContent}
        {columnContent}
        {columnContent}
      </ThreeColumn>
    );

    return (
      <DocsArticle title="ThreeColumn" colorIndex="neutral-3">

        <p>The ThreeColumn module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>ThreeColumn Options</h2>
          <dl>
            <dt><code>headline            {'{string}'}</code></dt>
            <dd>Headline of the columns.</dd>
            <dt><code>subHeadline         {'{string}'}</code></dt>
            <dd>Content for the subtext.</dd>
            <dt><code>colorIndex          {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color. For example: "neutral-1"</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Three Column', threeColumn)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = ThreeColumnDoc;
