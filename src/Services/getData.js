export const sendDataName = async (name) => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name }),
  };
  const response = await fetch(
    "https://vercel.com/yacine-21/ffixv-server-node/api/SearchCaracterName",
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
    "https://vercel.com/yacine-21/ffixv-server-node/api/SearchCaracterByID",
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
    "https://vercel.com/yacine-21/ffixv-server-node/api/getAllPatchList",
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
    "https://vercel.com/yacine-21/ffixv-server-node/api/getDeepDungeon/thePalaceOfTheDead",
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
    "https://vercel.com/yacine-21/ffixv-server-node/api/getDeepDungeon/HeavenOnHight",
    requestOptions
  );
  Data = await response.json();
  return Data;
};

export const getPommander = async () => {
  let Data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    "https://vercel.com/yacine-21/ffixv-server-node/api/getAllPommander",
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
    "https://vercel.com/yacine-21/ffixv-server-node/api/login",
    requestOptions
  );

  data = await response.json();
  console.log(data);

  return data;
};

export const testCreateAccount = async (name, password, email) => {
  let data = [];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"name":"${name}","email":"${email}","password":"${password}"}`,
  };
  const response = await fetch(
    "https://vercel.com/yacine-21/ffixv-server-node/api/register",
    requestOptions
  );

  data = await response.json();

  return data;
};
