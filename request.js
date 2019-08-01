const getGame = function(callback) {

  //Making an HTTP request
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (ev) => {
    if (ev.target.readyState === 4 && ev.target.status === 200) {
      const data = JSON.parse(ev.target.responseText)
      callback(undefined, data.puzzle)
    } else if (ev.target.readyState === 4) {
      callback('An error occured', undefined)
    }
  })

  request.open('GET', 'http://puzzle.mead.io/puzzle')
  request.send()
}