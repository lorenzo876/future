function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const keywords = [ 'music', 'laptop', 'headphones','iphone ' ];

function fetchProduct(index, keyword) {
  const url = 'http://www.splashbase.co/api/v1/images/search?query=' + keyword;
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    document.getElementById("product" + index + "_image").src = data.images[0].url;
  })
  .catch(function(error) {
    console.log(error);
  });   
}

window.onload = function() {
  for (let i = 0; i < keywords.length; i++) {
    fetchProduct(i+1, keywords[i]);
  }
};

