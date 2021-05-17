export const getData = async () => {
    let data = {}
    const response = await fetch(`http://localhost:3100/api/searchCaracter`);
    data = await response.json();
    console.log(data);
    return data
}

export const sendData = async ({name}) => { 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name })
    };
    const response = await fetch('http://localhost:3100/api/SearchCaracterName', requestOptions);
    const data = await response.text();
    return  data;
}