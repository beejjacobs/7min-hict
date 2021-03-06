let wakeLock = null;

document.addEventListener('visibilitychange', async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
    wakeLock = await navigator.wakeLock.request('screen');
  }
});

export async function requestWakeLock() {
  wakeLock = await navigator.wakeLock.request('screen');
  console.log('got wake lock');
}

export async function releaseWakeLock() {
  if (wakeLock) {
    await wakeLock.release();
    wakeLock = null;
    console.log('released wake lock');
  }
}
