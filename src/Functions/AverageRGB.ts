export const AverageColor = (img: any) => {
  var context: any = document.createElement("canvas").getContext("2d");
  if (typeof img == "string") {
    var src = img;
    img = new Image();
    img.setAttribute("crossOrigin", "");
    img.src = src;
  }
  context.imageSmoothingEnabled = true;
  context.drawImage(img, 0, 0, 1, 1);
  return context.getImageData(0, 0, 1, 1).data.slice(0, 3);
};
