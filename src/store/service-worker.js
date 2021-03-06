export default {
  namespaced: true,
  state: {
    /** @type {ServiceWorker | null} */
    sw: null,
  },
  mutations: {
    updated(state, sw) {
      state.sw = sw;
    }
  },
  getters: {
    hasUpdate(state) {
      return Boolean(state.sw);
    }
  },
  actions: {
    async reload({state}) {
      if (state.sw) {
        return new Promise((resolve, reject) => {
          const t = setTimeout(() => reject(new Error('Timeout waiting for service worker to skip waiting')), 5000);
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            // the service worker has reloaded
            clearTimeout(t);
            resolve();
          }, {once: true});
          state.sw.postMessage({type: 'SKIP_WAITING'});
        });
      } else {
        // fallback to just reloading
        window.location.reload();
      }
    }
  }
};
