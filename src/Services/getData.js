export const getData = async () => {
    let data = {}
    const response = await fetch(`http://localhost:3100/api/searchCaracter`);
    data = await response.json();
    console.log(data);
    return data
}

export const sendDataName = async (name) => { 

    let Data = [];

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name })
    };
    const response = await fetch('http://localhost:3100/api/SearchCaracterName', requestOptions);
    Data = await response.json();
    return  Data;
}


export const sendDataID = async (id) => { 

    let Data = [];

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
    };
    const response = await fetch('http://localhost:3100/api/SearchCaracterByID', requestOptions);
    Data = await response.json();
    return  Data;
}