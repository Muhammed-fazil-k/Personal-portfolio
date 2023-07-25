import Connect from "./Connect"
import NavBar from "./NavBar"

const Layout = ({children,page}) => {
  console.log("Layout : render");
  return (
    <>
      <NavBar page={page}/>
      {children}
      <Connect/>
    </>
  )
}

export default Layout
