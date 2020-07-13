import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-jjjhhjhjhjhjhjh-paws', 'Unit | Serializer | i-i-s-jjjhhjhjhjhjhjh-paws', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-jjjhhjhjhjhjhjh-paws',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-jjjhhjhjhjhjhjh-animal',
    'model:i-i-s-jjjhhjhjhjhjhjh-cat',
    'model:i-i-s-jjjhhjhjhjhjhjh-dog',
    'model:i-i-s-jjjhhjhjhjhjhjh-paws',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
