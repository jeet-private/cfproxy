###  Paste the Code: <br><br>

```
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
```
<br><br>

**Replace 'resolver.domain' with '[Your choosed Worker Name].[Your Worker Subdomain]'**



    ## Example
    
    'github.tuhinwin.workers.dev'

<br>

**Replace 'origin.domain' with '[Origin Domain]'**

    ## Example
    
    'github.com'

<br><br>

#### The Code should be like this:<br>


    ## Example
	
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
      'github.tuhinwin.workers.dev': 'github.com'
    }
    

<br><br>

>Website `https://tu.hin.life`.<br>
>My Social:<br><br>

https://fb.me/jeeetpaul<br>
https://www.instagram.com/jeeetpaul<br>
https://www.youtube.com/channel/UCa4FMtLpYcOBtjKOZgzTFNA<br>
https://github.com/cachecleanerjeet<br>
https://blog.iamtuhin.ga<br><br><br>
