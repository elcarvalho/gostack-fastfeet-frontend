const transformHashId = (id, lenght) => `#${String(id).padStart(lenght, 0)}`;

export default transformHashId;
