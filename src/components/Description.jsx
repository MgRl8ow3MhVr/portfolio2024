import React from 'react'

//transforms /n into paragraphs
const paragraphs = text => {
  return text.split('\n').map((item, i) => {
    if (item[0] === '>') {
      return <h2 key={i}>{item.replace('>', '')}</h2>
    } else {
      return <p key={i}>{item}</p>
    }
  })
}

const Description = ({ text }) => <>{paragraphs(text)}</>
export default Description
