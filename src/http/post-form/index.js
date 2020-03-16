let data = require("@begin/data");

exports.handler = async function http(request) {
  let result = await data.set({
    table: "cats",
    cat: request.body
  });
  return {
    status: 201,
    type: "application/json",
    location: `/api/cats/${result.key}`,
    body: JSON.stringify(result.cat)
  };
};
