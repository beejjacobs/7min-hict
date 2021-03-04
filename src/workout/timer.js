class Timer {
  interval;
  now;
  _elapsed = 0;
  listeners = [];

  addListener(l) {
    this.listeners.push(l);
  }

  get elapsed() {
    return this._elapsed;
  }

  set elapsed(v) {
    this._elapsed = v;
    this.listeners.forEach(l => l(v));
  }

  start() {
    if (this.interval) {
      // already started
      return;
    }
    this.now = performance.now();
    this.interval = setInterval(() => {
      const previous = this.now || 0;
      this.now = performance.now();
      this.elapsed += this.now - previous;
    }, 10);
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.elapsed = 0;
  }
}

export const timer = new Timer();

export const timerMixin = {
  data() {
    return {
      elapsed: 0
    };
  },
  mounted() {
    timer.addListener(elapsed => {
      this.elapsed = elapsed;
    });
  }
};
