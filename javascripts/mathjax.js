window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['ams']}
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typesetPromise();
  }
});