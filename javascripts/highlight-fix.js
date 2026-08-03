// 阻止搜索高亮侵入Math公式块
document$.subscribe(() => {
  document.addEventListener('md-search:highlight', function(ev) {
    // 不允许在 mathjax/katex 容器内部进行关键词高亮
    ev.detail.filter = (node) => {
      return !node.closest('.arithmatex, .MathJax, .katex');
    };
  });
});