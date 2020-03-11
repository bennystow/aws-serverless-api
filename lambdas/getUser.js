const responses = require('./api_responses');

exports.handler = async event => {
  console.log('event', event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return responses.response400({ message: 'missing the ID from path' });
  }

  let ID = event.pathParameters.ID;
  if (data[ID]) {
    // return data
    return responses.response200(data[ID]);
  }
  //failed as ID not in dataS
  return responses.response400({ message: 'no ID in data' });
};

const data = {
  1234: { name: 'benny stow', age: 35, job: 'data guy' },
  4567: { name: 'rozzy post', age: 35, job: 'governmentalist' },
  7891: { name: 'jim stow', age: 71, job: 'retired' }
};
