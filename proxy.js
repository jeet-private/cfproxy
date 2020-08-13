async function handleRequest(request) {
  const url = new URL(request.url)
  if (url.hostname in ORIGINS) {
    const target = ORIGINS[url.hostname]
    url.hostname = target
    return fetch(url.toString(), request)
  }
  return fetch(request)
}
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const ORIGINS = {
  'resolver.domain': 'origin.domain'
}
