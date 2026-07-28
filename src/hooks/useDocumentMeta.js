import { useEffect } from 'react'

function setMetaContent(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/**
 * Atualiza o título da aba e a meta description conforme a página atual.
 * Ajuda o SEO de cada rota da SPA e melhora o preview ao compartilhar o link.
 */
function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title
    }
    if (description) {
      setMetaContent('description', description)
    }
  }, [title, description])
}

export default useDocumentMeta
