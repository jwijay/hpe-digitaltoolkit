// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var FourColumn = require('../../modules/FourColumn');
var ColumnContent = require('../../modules/ColumnContent');
var columnContentOptions = require('./ColumnContentOptions');

FourColumn.displayName = 'FourColumn';

var inlineJSX = (
  <FourColumn headline="Headline Text">
    <ColumnContent title="Title Text" />
    <ColumnContent title="Title Text" />
    <ColumnContent title="Title Text" />
    <ColumnContent title="Title Text" />
  </FourColumn>
);
var inline = jsxToString(inlineJSX);

var FourColumnDoc = React.createClass({

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
      <ColumnContent image="/docs/img/Hero4_marquee.jpg"
        title="Manage the Rising Cost of Regulatory Compliance and Data Retention"
        description="The evolving threat environment and increased pace of business change creates costly compliance and data backup challenges. At HPE we think your data deserves better. HPE helps you adapt and stay compliant. Efficiently protect and govern your data to keep compliance costs down while saving money on regulatory fines and data loss."
        links={[
          {
            linkText: "Learn How to Backup with Brains to Plan, Prioritize, Automate and Predict Future Data Protection Needs",
            link: "#"
          }, {
            linkText: "Learn How to Accelerate Compliance and Protect Your Business from Risk with Information Governance",
            link: "#"
          }
        ]} />
    );

    var fourColumn = (
      <FourColumn headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA"
        colorIndex="light-2">
        {columnContent}
        {columnContent}
        {columnContent}
        {columnContent}
      </FourColumn>
    );

    return (
      <DocsArticle title="FourColumn" colorIndex="neutral-3">

        <p>The FourColumn module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>FourColumn Options</h2>
          <dl>
            <dt><code>colorIndex          {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color. For example: "neutral-1"</dd>
          </dl>
        </section>

        {columnContentOptions}

        <section>
          <h2>Examples</h2>

          {this._renderCode('Four Column', fourColumn)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = FourColumnDoc;
