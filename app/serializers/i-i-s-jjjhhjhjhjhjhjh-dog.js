import { Serializer as DogSerializer } from
  '../mixins/regenerated/serializers/i-i-s-jjjhhjhjhjhjhjh-dog';
import AnimalSerializer from './i-i-s-jjjhhjhjhjhjhjh-animal';

export default AnimalSerializer.extend(DogSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
