(function () {
  Object.defineProperty(List.prototype, 'renderHeight', {
    get() {
      // Force the height to 36
      return 36;
    },
    configurable: true,
  });
})();
