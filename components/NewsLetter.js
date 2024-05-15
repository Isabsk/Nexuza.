import React, { useState, useEffect } from 'react'

function NewsLetter() {
  const [loadIframe, setLoadIframe] = useState(false)

  useEffect(() => {
    // You can set conditions here for when you want the iframe to load
    setLoadIframe(true)
  }, [])

  return (
    <div>
      {loadIframe && (
        <iframe
          src="https://embeds.beehiiv.com/f20489b7-f7a3-4510-8b35-20d76fdfd67c?slim=true"
          data-test-id="beehiiv-embed"
          sandbox="allow-scripts"
          height="52"
          frameborder="0"
          scrolling="no"
          style={{ width: '100%', border: 'none' }}
        ></iframe>
      )}
    </div>
  )
}

export default NewsLetter
