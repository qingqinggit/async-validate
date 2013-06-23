# async-validate

Asynchronous validation for [node](http://nodejs.org).

## Installation

```
npm install async-validate
```

## Unit Tests

```
npm test
```

## Usage

Basic usage involves defining a descriptor, assigning it to a schema and passing the object to be validated and a callback function to the `validate` method of the schema:

```
var schema = require('async-validate');
var descriptor = {
  name: {type: "string", required: true}
}
var validator = new schema(descriptor);
validator.validate({name: "muji"}, function(errors, fields) {
  if(errors) {
    // validation failed, errors is an array of all errors
    // fields is keyed by field name
    return handleErrors(errors, fields);
  }
  // validation passed
});
```

Descriptors may be functions that perform validation:

```
var schema = require('async-validate');
var ValidationError = schema.error;
var descriptor = {
  name: function(descriptor, value, callback, values) {
    var errors = [];
    if(!/^[a-z0-9]+$/.test(value)) {
      errors.push(
        new ValidationError(
          util.format("Field %s must be lowercase alphanumeric characters",
            descriptor.field)));
    }
    callback(errors);
  }
}
var validator = new schema(descriptor);
validator.validate({name: "Firstname"}, function(errors, fields) {
  if(errors) {
    return handleErrors(errors, fields);
  }
  // validation passed
});
```

### Required

Add a `required` field to the descriptor to validate that the property exists.

### Type

Add a `type` field to a descriptor to indicate that the field must be a `typeof` the specified type. 
