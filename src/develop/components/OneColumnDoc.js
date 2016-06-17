// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var OneColumn = require('../../modules/OneColumn');
var DownloadIcon = require('grommet/components/icons/base/Download');

OneColumn.displayName = 'OneColumn';

var inline = '<OneColumn headline="Headline Text" />';

var OneColumnDoc = React.createClass({

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
        icon={<DownloadIcon size="large" colorIndex="brand" />}
        colorIndex="light-2" />
    );

    return (
      <DocsArticle title="OneColumn" colorIndex="neutral-3">

        <p>The OneColumn module.</p>
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
            <dt><code>colorIndex          {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color. For example: "neutral-1"</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('One Column', oneColumn)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = OneColumnDoc;
