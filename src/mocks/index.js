export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({
      // 설정되지 않은 url에대한 경고로그 제거
      onUnhandledRequest: 'bypass',
    });
  } else {
    const { worker } = await import('./browser');
    worker.start({
      // 설정되지 않은 url에대한 경고로그 제거
      onUnhandledRequest: 'bypass',
    });
  }
}
