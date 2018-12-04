/**
 * This is a json view, the reason we can consider it a view is because
 * we are creating a model with the purpose to "show" it to the client.
 * 
 * This is generally a good idea since we may store things on the model
 * that we don't want to send to the client.
 */
const MyModel = (foo, createdAt) => {
  return {
    foo,
    createdAt
  };
};
