window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['ams']} // 这里将你 main.html 里的 ams 配置合并过来了
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// 配合 MkDocs Material 页面无刷新跳转（SPA）的官方推荐重载代码
document$.subscribe(() => { 
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typesetPromise();
  }
});