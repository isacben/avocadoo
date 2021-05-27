let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, { subtree: true, childList: true });

function onUrlChange() {
  if (
    location.href.includes("model=openerp.enterprise.database&view_type=form")
  ) {
    let checkExist = setInterval(function () {
      let urlField = document.getElementsByName("url");

      if (urlField.length) {
        url = urlField[0].textContent;

        let odooSupport = document.createElement("span");
        odooSupport.style.marginLeft = "10px";
        odooSupport.innerHTML = `<a href="${url}/_odoo/support" target="_blank">/_odoo/support</a>`;
        urlField[0].after(odooSupport);

        clearInterval(checkExist);
      }
    }, 200);
  }
}
