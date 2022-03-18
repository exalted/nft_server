// Netlify provides the event and context parameters when the function is
// invoked. When you call a function’s endpoint, the handler receives an event
// object similar to the following:
// {
//   "path": "Path parameter (original URL encoding)",
//   "httpMethod": "Incoming request’s method name",
//   "headers": {Incoming request headers},
//   "queryStringParameters": {Query string parameters},
//   "body": "A JSON string of the request payload",
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
// }
// -----------------------------------------------------------------------------
// Synchronous functions can return a response object that includes the
// following information:
// {
//   "isBase64Encoded": true|false,
//   "statusCode": httpStatusCode,
//   "headers": { "headerName": "headerValue", ... },
//   "multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
//   "body": "..."
// }
//

exports.handler = async function (event, _context) {
  console.log(`event: ${JSON.stringify(event, null, 2)}`);
  console.log(`context: ${JSON.stringify(_context, null, 2)}`);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      name: 'Change 1 - Learning NFT (name)',
      description: 'Learning NFT (description)',
      image: 'https://avatars.githubusercontent.com/u/15199722',
      external_link: 'https://github.com/',
      seller_fee_basis_points: 100,
      fee_recipient: '0x664f6De6C2FB6Df7cAC37d774af64d11346f0cb7',
    }),
  };
};
