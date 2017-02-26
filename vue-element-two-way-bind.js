Vue.directive('two-way-bind', {
  bind: function(el, binding, vnode) {
    vnode.context[binding.expression] = el.textContent;
  },
  update: function(el, binding, vnode) {
    el.innerHTML = vnode.context[binding.expression];
  }
});
