import UriTemplate from 'uri-templates';

import { module, test } from 'qunit';

module('Unit | Utility | uri templates export');

test('it works', function(assert) {
  const template = new UriTemplate('/foo{/bar}{/baz}');
  const result = template.fillFromObject({ baz: 'BAZ' });
  assert.equal(result, '/foo/BAZ');
});
