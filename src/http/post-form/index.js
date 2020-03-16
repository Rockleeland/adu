let data = require("@begin/data");

exports.handler = async function http(request) {
  let headers = { "Content-Type": "application/json; charset=utf8" };
  if (!request.body.note) {
    return {
      statusCode: 204,
      headers,
      body: JSON.stringify({ ok: false })
    };
  } else {
    let table = "notes";
    let note = request.body.note;
    await data.set({ table, note });
    return {
      status: 201,
      headers,
      body: JSON.stringify({ ok: true })
    };
  }
};
