function base(props) {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

export function StrawberryIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 9.3 12 6.2M12 9.3 9 7.4M12 9.3l3-1.9M12 9.3 7.3 9M12 9.3l4.7-.3" />
      <path d="M12 10c-1-.9-2.2-1.2-3.4-.8-2.9.9-4.6 3.9-4 7 .7 3.6 4 6.3 7.4 6.3s6.7-2.7 7.4-6.3c.6-3.1-1.1-6.1-4-7-1.2-.4-2.4-.1-3.4.8Z" />
      <circle cx="9.2" cy="14" r=".55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12.6" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="14" r=".55" fill="currentColor" stroke="none" />
      <circle cx="9.7" cy="17.3" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="17.3" r=".55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19.2" r=".55" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function AppleIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 9.5V6.3" />
      <path d="M12 7.4c.8-1.2 2.1-1.7 3.1-1.1" />
      <path d="M12 9.2c-.6-1-1.6-1.6-2.7-1.4-2.7.5-4.6 3.1-4.3 6.1.4 3.9 3.4 7.6 7 7.6s6.6-3.7 7-7.6c.3-3-1.6-5.6-4.3-6.1-1.1-.2-2.1.4-2.7 1.4Z" />
    </svg>
  )
}

export function PineappleIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 8 12 1.8M12 8 8.3 4.5M12 8l3.7-3.5M12 8 6.3 6.8M12 8l5.7-1.2" />
      <path d="M5.7 14.3c0-4.8 2.8-7.5 6.3-7.5s6.3 2.7 6.3 7.5c0 4.9-2.8 7.7-6.3 7.7s-6.3-2.8-6.3-7.7Z" />
      <path d="M8 11.3l3 3.2M8 17.5l3-3M13 11.3l3 3.2M13 17.5l-3-3" />
    </svg>
  )
}

export function GuavaIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 8.6c-.3-1.6.5-2.8 2-3.1" />
      <path d="M12.2 8.8c-3.6-.6-6.7 1.9-7 5.3-.3 3.5 2.2 6.6 5.8 6.9 3.7.3 6.9-2.3 7.1-5.8.2-3.3-2.3-5.8-5.9-6.4Z" />
      <path d="M9.6 12.6c.4.4.4 1 0 1.4M11.8 11.9c.4.4.4 1 0 1.4M14 12.8c.4.4.4 1 0 1.4" />
      <circle cx="9.8" cy="16.3" r=".5" fill="currentColor" stroke="none" />
      <circle cx="12.6" cy="17" r=".5" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="15.8" r=".5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ChiliIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M13.4 4.4c-.2-.9-1-1.5-2-1.4" />
      <path d="M12.6 4.9c1.7.4 2.9 2.2 3.1 4.6.3 3.2-1.3 7.2-3.9 9.6-1.9 1.8-4 1-4.5-1.2-.7-3 .5-7.8 2.9-11 .5-.7 1.5-2.3 2.4-2Z" />
    </svg>
  )
}

export function BerriesIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12.2 6c.2-1 1-1.7 2-1.7" />
      <path d="M9.2 6.6c.5-.8 1.6-1.2 2.6-.8" />
      <path d="M8.6 12.4c-1.7-.1-3.1 1.2-3.2 2.9-.1 1.8 1.3 3.3 3.1 3.4 1.8.1 3.3-1.2 3.4-3 .1-1.8-1.4-3.2-3.3-3.3Z" />
      <path d="M15.6 12.4c-1.8-.1-3.3 1.2-3.4 3-.1 1.8 1.3 3.3 3.2 3.4 1.7.1 3.1-1.2 3.2-2.9.1-1.8-1.3-3.4-3-3.5Z" />
      <path d="M12.1 8.4c-1.9 0-3.4 1.5-3.5 3.4-.1 2 1.5 3.7 3.5 3.8 2.1.1 3.7-1.5 3.8-3.5.1-2.1-1.6-3.6-3.8-3.7Z" />
    </svg>
  )
}

export function KiwiIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 5.5c.2-1 1-1.6 2-1.5" />
      <circle cx="12" cy="13" r="7" />
      <circle cx="16.3" cy="13" r=".55" fill="currentColor" stroke="none" />
      <circle cx="15.1" cy="9.7" r=".55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8.5" r=".55" fill="currentColor" stroke="none" />
      <circle cx="8.9" cy="9.7" r=".55" fill="currentColor" stroke="none" />
      <circle cx="7.7" cy="13" r=".55" fill="currentColor" stroke="none" />
      <circle cx="8.9" cy="16.3" r=".55" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17.5" r=".55" fill="currentColor" stroke="none" />
      <circle cx="15.1" cy="16.3" r=".55" fill="currentColor" stroke="none" />
      <path d="M12 13h2.2M12 13l1.1-1.9M12 13l-1.1-1.9M12 13h-2.2M12 13l-1.1 1.9M12 13l1.1 1.9" />
    </svg>
  )
}

export function BananaIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M9.3 4.6c.3-.9 1.1-1.4 2-1.3" />
      <path d="M9.3 4.6c-2.7 1.9-4.5 5.2-4.6 8.9-.1 4.3 2.5 7.9 6.3 8.9 3.4.9 6.9-.5 8.8-3.4-3.4.8-7-.8-8.5-4-1.3-2.8-1-6.1.7-8.6.3-.4.2-.9-.2-1.2-.4-.4-1.1-.5-1.5-.3Z" />
      <path d="M8.4 8c-1.2 2.6-1.2 5.6.2 8.1" />
    </svg>
  )
}

export function SnowflakeIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16" />
      <path d="M8 4.9 16 19.1" />
      <path d="M16 4.9 8 19.1" />
      <path d="M18 12 18.9 8.8M18 12 18.9 15.2" />
      <path d="M15 17.2 18.2 16.4M15 17.2 12.7 19.6" />
      <path d="M9 17.2 11.3 19.6M9 17.2 5.8 16.4" />
      <path d="M6 12 5.1 15.2M6 12 5.1 8.8" />
      <path d="M9 6.8 5.8 7.6M9 6.8 11.3 4.4" />
      <path d="M15 6.8 12.7 4.4M15 6.8 18.2 7.6" />
    </svg>
  )
}

const ICONS = {
  morango: StrawberryIcon,
  'maca-canela': AppleIcon,
  'abacaxi-pimenta-calabresa': PineappleIcon,
  'goiaba-especiarias': GuavaIcon,
  'geleia-de-pimenta': ChiliIcon,
  'frutas-vermelhas': BerriesIcon,
  'frutas-amarelas': BananaIcon,
  'frutas-verdes': KiwiIcon,
  'pinhao-maca': SnowflakeIcon,
}

export function FruitIcon({ id, ...props }) {
  const Icon = ICONS[id]
  if (!Icon) return null
  return <Icon {...props} />
}
