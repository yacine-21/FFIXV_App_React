export const sendDataName = async (name) => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name }),
  };
  const response = await fetch(
    "http://localhost:3100/api/SearchCaracterName",
    requestOptions
  );
  Data = await response.json();
  return Data;
};

export const sendDataID = async (id) => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  };
  const response = await fetch(
    "http://localhost:3100/api/SearchCaracterByID",
    requestOptions
  );
  Data = await response.json();
  return Data;
};

export const sendPatchList = async () => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const response = await fetch(
    "http://localhost:3100/api/getAllPatchList",
    requestOptions
  );
  Data = await response.json();
  return Data;
};

export const sendDeepDungeonOne = async () => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    "http://localhost:3100/api/getDeepDungeon/thePalaceOfTheDead",
    requestOptions
  );
  Data = await response.json();
  return Data;
};

export const sendDeepDungeonTwo = async () => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    "http://localhost:3100/api/getDeepDungeon/HeavenOnHight",
    requestOptions
  );
  Data = await response.json();
  return Data;
};

export const testLogin = async (email, password) => {
  let data = [];
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"email":"${email}","password":"${password}"}`,
  };
  const response = await fetch(
    "http://localhost:3100/api/login",
    requestOptions
  );

  data = await response.json();
  console.log(data);

  return data;
};

export const testCreateAccount = async (name, password, email) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"name":"${name}","email":"${email}","password":"${password}"}`,
  };
  const response = await fetch(
    "http://localhost:3100/api/register",
    requestOptions
  );

  return response;
};
