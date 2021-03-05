class Timer {
  interval;
  now;
  _elapsed = 0;
  _playing = false;
  listeners = {
    elapsed: [],
    playing: []
  };


  addListener(type, l) {
    this.listeners[type].push(l);
  }

  get elapsed() {
    return this._elapsed;
  }

  set elapsed(v) {
    this._elapsed = v;
    this.listeners.elapsed.forEach(l => l(v));
  }

  get playing() {
    return this._playing;
  }

  set playing(p) {
    this._playing = p;
    this.listeners.playing.forEach(l => l(p));
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
    this.playing = true;
  }

  pause() {
    this._clearInterval();
  }

  stop() {
    this._clearInterval();
    this.elapsed = 0;
  }

  _clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.playing = false;
  }
}

export const timer = new Timer();

export const timerMixin = {
  data() {
    return {
      elapsed: 0,
      playing: false
    };
  },
  mounted() {
    timer.addListener('elapsed', elapsed => {
      this.elapsed = elapsed;
    });
    timer.addListener('playing', playing => {
      this.playing = playing;
    });
  }
};
