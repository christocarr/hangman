'use strict'

const getGame = async (wordCount) => {
  const response = await fetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=`)
  if (response.status === 200) {
    const data = await response.json()
    return data.word
  } else {
    throw new Error('Unable to get new puzzle')
  }
}

export default getGame