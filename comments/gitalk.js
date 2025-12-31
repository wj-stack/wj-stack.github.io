(() => {
  const loadComments = async () => {
    if (typeof Gitalk === "undefined") {
      setTimeout(loadComments, 100);
    } else {
      const container = document.getElementById('gitalk-container');
      if (!container) {
        return;
      }
      const path = container.getAttribute("data-path");
      const gitalk = new Gitalk(Object.assign({
        //   id: path, // 直接使用路径作为 id
          id: container.getAttribute("data-path-hash"), // 使用 hash 作为 ID
          path: path,
      }, {
        clientID: 'Ov23lizXpC1JClm0CZiQ',
        clientSecret: 'be4ffe2a2a159714ad0a7f38f503d816bfca086c',
        repo: "wj-stack.github.io",
        owner: "wj-stack",
        admin: ["wj-stack"],
        distractionFreeMode: false,
      }));

      gitalk.render('gitalk-container');
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
