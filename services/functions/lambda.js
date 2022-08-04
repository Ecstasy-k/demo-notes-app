export const handler = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, CHINO! Your request was received at ${event.requestContext.time}.`,
  };
};
