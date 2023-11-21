export const ScrollToElement = (id: string, router: any) => {
  const element = document.querySelector(`#${id}`);

  if (element) {
    window.scroll({
      top: element.scrollHeight + 250,
      behavior: "smooth",
    });
  } else {
    router.push("/");
    setTimeout(() => {
      ScrollToElement(id, router);
    }, 300);
  }
};
