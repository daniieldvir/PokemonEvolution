export const utilService = {
  load,
  save,
};

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
