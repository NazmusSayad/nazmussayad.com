import Link from 'next/link'
import css from './Button.module.scss'

type ButtonProps = {
  children: any
  default?: boolean
  className?: string | any[]
  loading?: boolean
  href?: string
  to?: string
  nav?: boolean
  [i: string]: any
}

const Button = ({
  default: defaultStyles = false,
  className,
  children,
  loading,
  href,
  to,
  nav,
  ...props
}: ButtonProps) => {
  const allProps: any = {
    ...props,
    className: $cn(defaultStyles ? 'buttonFocus' : 'button', className),
  }

  if (href) return <a {...allProps} href={href} children={children} />
  if (to) {
    return nav ? (
      <Link {...allProps} to={to} children={children} />
    ) : (
      <Link {...allProps} to={to} children={children} />
    )
  }

  allProps.disabled ??= loading
  return (
    <button {...allProps}>
      {typeof loading === 'boolean' ? (
        <div style={{ color: loading ? 'transparent' : undefined }}>
          {children}
        </div>
      ) : (
        children
      )}

      {loading === true && (
        <div className={css.loading}>
          <div className={css.loader}></div>
        </div>
      )}
    </button>
  )
}

export const ButtonDefault = (props: ButtonProps) => {
  return <Button {...props} default />
}

export const ButtonBlank = ({ className, ...props }: ButtonProps) => {
  return <Button {...props} className={['button__blank', className]} default />
}

export const ButtonText = ({ className, ...props }: ButtonProps) => {
  return <Button {...props} className={['button__text', className]} />
}

export const ButtonPrimary = ({ className, ...props }: ButtonProps) => {
  return <Button {...props} className={['button__primary', className]} />
}

export const ButtonSecondary = ({ className, ...props }: ButtonProps) => {
  return <Button {...props} className={['button__secondary', className]} />
}

export const ButtonOutline = ({ className, ...props }: ButtonProps) => {
  return <Button {...props} className={['button__outline', className]} />
}

export const ButtonRed = ({ className, ...props }: ButtonProps) => {
  return <Button {...props} className={['button__red', className]} />
}
