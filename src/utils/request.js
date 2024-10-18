const _apiHost = "https://api.service.com/v1";

async function request(url, params, method = "GET") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(_apiHost + url, options);

  if (response.status !== 200) {
    return generateErrorResponse(
      "The server responded with an unexpected status."
    );
  }

  const result = await response.json();

  return result;
}

function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
}

function generateErrorResponse(message) {
  return {
    status: "error",
    message,
  };
}

const API = {
  get: (url, params) => {
    request(url, params);
  },
  post: (url, params) => {
    request(url, params);
  },
  update: (url, params) => {
    request(url, params);
  },
  delete: (url, params) => {
    request(url, params);
  },
};

export default {
  API,
};
