import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-jjjhhjhjhjhjhjh-animal', 'Unit | Model | i-i-s-jjjhhjhjhjhjhjh-animal', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
