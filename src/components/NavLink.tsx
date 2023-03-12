import { useRouter } from 'next/router'
import Link from 'next/link'

function NavLink({
  href,
  exact = false,
  activeClassName = ' active',
  ...props
}) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += activeClassName
  }

  return (
    <Link href={href}>
      <a {...props} />
    </Link>
  )
}

export default NavLink
