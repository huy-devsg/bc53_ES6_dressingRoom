let productList = [];
const getEle = (ele) => document.querySelector(ele);
const getProduct = () => {
  const promise = axios({
    url: "https://651a70bb340309952f0d4a92.mockapi.io/products",
    method: "GET",
  });
  promise
    .then((result) => {
      productList = result.data;
      renderContent(productList);

      showProduct("topclothes");
    })
    .catch((err) => {
      console.log(err);
    });
};
getProduct();

const getTabList = () => {
  const promise = axios({
    url: "https://651a70bb340309952f0d4a92.mockapi.io/tabPane",
    method: "GET",
  });
  promise
    .then((result) => {
      renderTab(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
getTabList();

const renderContent = (productList) => {
  htmlContent = "";
  for (i = 0; i < productList.length; i++) {
    products = productList[i];
    htmlContent += `
        <div class="card">
        <img src="${products.imgSrc_jpg}" alt="">
        <h4>${products.name}</h4>
        <button class="btn btn-info" id="button" onclick="wear('${products.imgSrc_png}','${products.type}')">Thử đồ</button>
      </div>
    `;
  }
  document.querySelector("#showProduct").innerHTML = htmlContent;
};

const renderTab = (tabList) => {
  htmlContent = "";
  for (i = 0; i < tabList.length; i++) {
    tab = tabList[i];
    htmlContent += `<li onclick="showProduct('${tab.type}')">${tab.showName}</li>`;
  }
  document.querySelector("#tabList").innerHTML = htmlContent;
};

const showProduct = (type) => {
  const filteredProducts = productList.filter((product) => {
    return product.type === type;
  });
  renderContent(filteredProducts);
};

const wear = (url, type) => {
  if (type === "topclothes") {
    getEle(".bikinitop").innerHTML = `<img src="${url}" alt="" />`;
  } else if (type === "botclothes") {
    getEle(".bikinibottom").innerHTML = `<img src="${url}" alt="" />`;
  } else if (type === "shoes") {
    getEle(".feet").style.backgroundImage = `url(${url})`;
  } else if (type === "handbags") {
    getEle(".handbag").style.backgroundImage = `url(${url})`;
  } else if (type === "necklaces") {
    getEle(".necklace").style.backgroundImage = `url(${url})`;
  } else if (type === "hairstyle") {
    getEle(".hairstyle").style.backgroundImage = `url(${url})`;
  } else {
    getEle(".background").style.backgroundImage = `url(${url})`;
  }
};
