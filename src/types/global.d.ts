interface Window {
  amplitude: {
    track: (
      event: string,
      data?: Record<string, string | number | boolean>,
    ) => void
    init: (
      key: string,
      options: { fetchRemoteConfig: boolean; autocapture: boolean },
    ) => void
  }
}
