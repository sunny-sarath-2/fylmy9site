import serviceBase from "./serviceBase";
const productService = {
  News: () => serviceBase.get("/api/news"),
  Reviews: () => serviceBase.get("/api/review")
};

export default productService;
