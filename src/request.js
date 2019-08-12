'use strict'

const getGame = async (wordCount) => {
  const response = await fetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=1&minDictionaryCount=1&maxDictionaryCount=-1&maxLength=-1&api_key=9pt0pmi5w3rjmjm9muzunv9ynrayz9z54h5pimcsjjj6tz70a`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get new puzzle')
  }
}

export default getGame

//https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=1&minDictionaryCount=1&maxDictionaryCount=-1&maxLength=-1&api_key=9pt0pmi5w3rjmjm9muzunv9ynrayz9z54h5pimcsjjj6tz70a