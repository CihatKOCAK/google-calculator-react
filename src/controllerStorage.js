function getStorage() {
  if (localStorage.getItem("calculate")) {
    let myData = JSON.parse(localStorage.getItem("calculate"));
    return myData;
  } else {
    let localData = {
      theme: true,
      historyOperations: [],
    };
    localStorage.setItem("calculate", JSON.stringify(localData));
    return localData;
  }
}
function setStore(data, key) {
  let newData = getStorage();
  newData[key] = data;
  localStorage.setItem("calculate", JSON.stringify(newData));
}

export { getStorage, setStore };
