export const AverageColor = (imgSrc: any) => {
  console.log(imgSrc);

  var canvas: any = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let img = new Image();
  img.setAttribute("crossOrigin", "");
  img.src = imgSrc;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");

      ctx.drawImage(img, 0, 0, 1, 1);
    }, 200);
  }).then(() => {
    return ctx.getImageData(0, 0, 1, 1).data.slice(0, 3);
  });
};
