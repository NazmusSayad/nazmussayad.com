import css from './Layouts.module.scss'
import { PropsWithChildren } from 'react'

export const Wrapper = ({
  className,
  children,
  ...props
}: {
  className?: string
  children: any
  [i: string]: any
}) => {
  return (
    <div {...props} className={$cn('wrapper', className)}>
      {children}
    </div>
  )
}

export const RootWrapper = ({ className, ...props }: PropsWithChildren<any>) => {
  return <Wrapper {...props} className={$cn(css.RootLayout, className)} />
}
