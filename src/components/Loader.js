import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={60}
    viewBox="0 0 400 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="16" rx="0" ry="0" width="81" height="40" /> 
    <rect x="186" y="17" rx="0" ry="0" width="52" height="41" /> 
    <rect x="263" y="16" rx="0" ry="0" width="52" height="41" /> 
    <rect x="343" y="15" rx="0" ry="0" width="52" height="41" />
  </ContentLoader>
)

export default Loader