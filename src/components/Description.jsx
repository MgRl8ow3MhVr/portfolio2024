import React from 'react'
import './Description.css'

//parses bold text delimited by ** **
const parseBold = (text, keyPrefix = 'bold') => {
  const boldRegex = /\*\*([^*]+)\*\*/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    parts.push(
      <strong key={`${keyPrefix}-${match.index}`}>{match[1]}</strong>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

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

//parses both links and bold in text
const parseInline = (text, keyPrefix = 'inline') => {
  const linkParts = parseLinks(text)
  if (!Array.isArray(linkParts)) {
    return parseBold(linkParts, keyPrefix)
  }
  return linkParts.map((part, idx) => {
    if (typeof part === 'string') {
      return parseBold(part, `${keyPrefix}-${idx}`)
    }
    return part
  })
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
          <li key={`${keyPrefix}-li-${idx}`}>{parseInline(item, `${keyPrefix}-li-${idx}`)}</li>
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
      result.push(<p key={i}>{parseInline(item, `p-${i}`)}</p>)
      i++
    } else {
      i++
    }
  }

  return result
}

const Description = ({ text }) => <>{paragraphs(text)}</>
export default Description
