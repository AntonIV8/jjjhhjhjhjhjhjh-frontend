import { Serializer as AnimalSerializer } from
  '../mixins/regenerated/serializers/i-i-s-jjjhhjhjhjhjhjh-animal';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AnimalSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
