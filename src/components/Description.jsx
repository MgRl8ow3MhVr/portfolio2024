import React from 'react'
import './Description.css'

//parses inline links from text
const parseLinks = text => {
  const linkRegex = /<link href="([^"]+)" title="([^"]+)">/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }

    // Add the link element
    const url = match[1]
    const title = match[2]
    parts.push(
      <a
        key={match.index}
        href={url}
        className="inline-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    )

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

//processes list blocks with <ul> tags and "-" items
const parseList = (lines, startIndex, keyPrefix) => {
  const listItems = []
  let i = startIndex

  while (i < lines.length && lines[i].trim() !== '</ul>') {
    const line = lines[i].trim()
    if (line.startsWith('-')) {
      listItems.push(line.substring(1).trim())
    }
    i++
  }

  return {
    element: (
      <ul key={`${keyPrefix}-ul`}>
        {listItems.map((item, idx) => (
          <li key={`${keyPrefix}-li-${idx}`}>{parseLinks(item)}</li>
        ))}
      </ul>
    ),
    endIndex: i
  }
}

//transforms /n into paragraphs
const paragraphs = text => {
  const lines = text.split('\n')
  const result = []
  let i = 0

  while (i < lines.length) {
    const item = lines[i]

    if (item.trim() === '<ul>') {
      const { element, endIndex } = parseList(lines, i + 1, `list-${i}`)
      result.push(element)
      i = endIndex + 1
    } else if (item.trim() === '<space/>') {
      result.push(<br key={i} />)
      i++
    } else if (item.trim()[0] === '>') {
      result.push(<h2 key={i}>{item.trim().replace('>', '')}</h2>)
      i++
    } else if (item.trim() !== '') {
      result.push(<p key={i}>{parseLinks(item)}</p>)
      i++
    } else {
      i++
    }
  }

  return result
}

const Description = ({ text }) => <>{paragraphs(text)}</>
export default Description
