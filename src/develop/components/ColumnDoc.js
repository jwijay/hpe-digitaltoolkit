// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var OneColumn = require('../../modules/OneColumn');
var TwoColumn = require('../../modules/TwoColumn');
var ColumnContent = require('../../modules/ColumnContent');
var DownloadIcon = require('grommet/components/icons/base/Download');

OneColumn.displayName = 'OneColumn';

var inline = "<{Number}Column />";

var ColumnDoc = React.createClass({

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
    var oneColumn = (
      <OneColumn headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA"
        description="Unlock 1TB of free storage on any new Intel-based server from any server vendor. Try it today."
        ctaText="Get a Free 1TB VSA License"
        link="http://www.grommet.io/docs/"
        icon={<DownloadIcon size="large" colorIndex="brand" />} />
    );

    var columnContentImage = (
      <ColumnContent image="/docs/img/Hero4_marquee.jpg" />
    );

    var columnContent = (
      <ColumnContent icon="/docs/img/cubes.svg"
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

    var twoColumn = (
      <TwoColumn headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA">
        {columnContentImage}
        {columnContent}
      </TwoColumn>
    );

    var columnThirtySixty = (
      <TwoColumn mainColumn="end"
        headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA">
        {columnContentImage}
        {columnContent}
      </TwoColumn>
    );

    var columnSixtyThirty = (
      <TwoColumn mainColumn="start"
        headline="Free 1TB of Software Defined Storage"
        subHeadline="HPE StoreVirtual VSA">
        {columnContent}
        {columnContentImage}
      </TwoColumn>
    );

    return (
      <DocsArticle title="Column" colorIndex="neutral-3">

        <p>The Column module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>OneColumn Options</h2>
          <dl>
            <dt><code>headline            {'{string}'}</code></dt>
            <dd>Headline of the column.</dd>
            <dt><code>subHeadline         {'{string}'}</code></dt>
            <dd>Content for the subtext.</dd>
            <dt><code>description         {'{string}'}</code></dt>
            <dd>Content for the description.</dd>
            <dt><code>ctaText             {'{string}'}</code></dt>
            <dd>Call to action text to display.</dd>
            <dt><code>icon                {'{element}'}</code></dt>
            <dd>Anchor Icon element.</dd>
            <dt><code>link                {'{string}'}</code></dt>
            <dd>Anchor hyperlink reference.</dd>
            <dt><code>onClick             {'{function}'}</code></dt>
            <dd>Click handler for the call to action Anchor.</dd>
          </dl>
        </section>

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
          <h2>ColumnContent Options</h2>
          <dl>
            <dt><code>image               {'{string}'}</code></dt>
            <dd>Url for an image.</dd>
            <dt><code>title               {'{string}'}</code></dt>
            <dd>Content for the title.</dd>
            <dt><code>description         {'{string}'}</code></dt>
            <dd>Content for the description.</dd>
            <dt><code>icon                {'{string}'}</code></dt>
            <dd>Url for an icon image.</dd>
            <dt><code>links               {'[{link: string, linkText: string}, ...]'}</code></dt>
            <dd>An array of links (objects).</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('One Column', oneColumn)}
          {this._renderCode('Two Column', twoColumn)}
          {this._renderCode('Two Column - 33-66', columnThirtySixty)}
          {this._renderCode('Two Column - 66-33', columnSixtyThirty)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = ColumnDoc;
