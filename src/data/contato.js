const whatsappNumero = '5541999081382'

export function whatsappLinkFor(mensagem) {
  return `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

export const whatsappLink = whatsappLinkFor(
  'Olá! Vim pelo site da Alegria Geleias e queria saber mais sobre os sabores 🍓'
)

export const shopeeLink = 'https://shopee.com.br/shop/282415946'
