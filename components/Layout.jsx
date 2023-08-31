import Connect from "./Connect"
import NavBar from "./NavBar"

const Layout = ({children,page}) => {
  return (
    <>
      <NavBar page={page}/>
      {children}
      <Connect/>
    </>
  )
}

export default Layout
