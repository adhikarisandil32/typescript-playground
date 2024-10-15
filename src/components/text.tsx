import React from "react"

type TextProps = {
  children: React.ReactNode
  as?: React.ElementType
  rest?: any
}

export default function Text({ children, as, ...rest }: TextProps) {
  const Component = as || "div"

  return <Component {...rest}>{children}</Component>
}
