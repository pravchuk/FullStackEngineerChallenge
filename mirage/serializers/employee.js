import BaseSerializer from './application';
import DS from 'ember-data';

const { EmbeddedRecordsMixin } = DS;

export default BaseSerializer.extend(EmbeddedRecordsMixin,{
  include: ['reviews'],
  embed: true
});
