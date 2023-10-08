  const KEY = 'io5yv0n4i0cfnhcc'


  const fetchIpInfo = ip => {
    return fetch(`https://api.ipregistry.co/${ip}?key=${KEY}`)
      .then(res => res.json())
      .catch(err => console.error(err))
  }

  const $form = document.querySelector('#form')
  const $input = document.querySelector('#texto')
  const $submit = document.querySelector('#submit')
  const $results = document.querySelector('#results')

  $form.addEventListener('submit' , async (event) => {
      event.preventDefault()
      const {value} = $input
      if(!value) return

      $submit.setAttribute('disabled','')
      $submit.setAttribute('aria-busy','true')

      const ipInfo = await fetchIpInfo(value)


      if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo,null,2)
      }

      $submit.removeAttribute('disabled')
      $submit.removeAttribute('aria-busy')
  })

