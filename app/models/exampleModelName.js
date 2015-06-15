import DS from 'ember-data';

export default DS.Model.extend({
  attribute1: DS.attr('string'), // type 'string' because... example
  attribute2: DS.attr('string')  // type 'string' because... example
});                              // if return type is not defined, defaults to
                                 // whatever type is returned from server.
