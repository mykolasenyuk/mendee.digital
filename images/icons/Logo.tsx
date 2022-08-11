import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={479}
    height={229}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M325.687 0h-72.374v204.194L110.38 59.807l-51.176 51.697 142.929 144.385H0V329h579v-73.111H376.867l142.93-144.385-51.177-51.697-142.933 144.385V0Z"
      fill="#FFA837"
    />
  </svg>
)

export default SvgComponent
