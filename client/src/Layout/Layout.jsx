import Header from './../Components/Header/Header';
import Footer from './../Components/Footer/Footer';
import Router from './../Routes/Router';
import ScrollToTop from '../ScrollToTop';
const Layout = () => {
  return (
    <>
    <Header/>
    <main>
    <Router/>
    <ScrollToTop/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout