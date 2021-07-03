import "../public/css/bootstrap.min.css"
import "../public/css/animate.min.css"
import "../public/css/boxicons.min.css"
import "../public/css/meanmenu.min.css"
import "../public/css/flaticon.css"
import "../node_modules/react-modal-video/css/modal-video.min.css"
import "react-accessible-accordion/dist/fancy-example.css"
import "react-tabs/style/react-tabs.css"
import "react-image-lightbox/style.css"
import "../public/css/style.css"
import "../public/css/responsive.css"

import Layout from "../components/_App/Layout"
import axios from "axios"
import { parseCookies, destroyCookie } from "nookies"
import { redirectUser } from "../utils/auth"
import baseUrl from "../utils/baseUrl"

const MyApp = ({ Component, pageProps }) => {
  // console.log(pageProps)
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
