function toDataURL(url) {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
}

//Download image
const download = async (url) => {
  const a = document.createElement("a");
  a.href = await toDataURL(url);
  a.download = "Picanjli.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default download;
