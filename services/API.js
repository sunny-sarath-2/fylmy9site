import serviceBase from "./serviceBase";
const productService = {
  News: () => serviceBase.get("/api/news"),
  Reviews: () => serviceBase.get("/api/review"),
  Single: id => serviceBase.get(`/api/news/${id}`)
};

export default productService;
