const constructResponse = function(code) {
  return function(data = {}) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: code,
      body: JSON.stringify(data)
    };
  };
};

const responses = {
  response200: constructResponse(200),
  response400: constructResponse(400)
};

module.exports = responses;
