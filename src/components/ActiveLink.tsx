import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const pathSplitted = asPath.split('/')

  const pathName = pathSplitted[1]

  let isActive = false

  const pathNameIsEqualHref = pathName === rest.href
  const pathNameIsEqualAs = pathName === rest.as

  if (pathNameIsEqualHref || pathNameIsEqualAs) {
    isActive = true
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
