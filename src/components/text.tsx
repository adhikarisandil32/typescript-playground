import React from "react"

type TextPropsWithoutComponentProps<E extends React.ElementType> = {
  children: React.ReactNode
  as?: E
}

type TextProps<E extends React.ElementType> = TextPropsWithoutComponentProps<E> &
  Omit<React.ComponentProps<E>, keyof TextPropsWithoutComponentProps<E>>

export default function Text<E extends React.ElementType = "div">({ children, as, ...rest }: TextProps<E>) {
  const Component = as ?? "div"

  return <Component {...rest}>{children}</Component>
}
