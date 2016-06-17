var React = require('react');

module.exports = (
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
);
