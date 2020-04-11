import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        In mollis nunc sed id. Eget nullam non nisi est sit amet facilisis. Eget
        est lorem ipsum dolor sit amet consectetur adipiscing. Commodo odio
        aenean sed adipiscing diam. Pretium viverra suspendisse potenti nullam.
        Eget mi proin sed libero enim sed faucibus turpis. Augue neque gravida
        in fermentum et sollicitudin ac orci. Posuere sollicitudin aliquam
        ultrices sagittis orci a scelerisque purus semper. Volutpat lacus
        laoreet non curabitur gravida arcu ac tortor dignissim. Quis ipsum
        suspendisse ultrices gravida dictum fusce ut. Urna condimentum mattis
        pellentesque id nibh tortor id. Nisl vel pretium lectus quam id leo in
        vitae turpis. Ipsum nunc aliquet bibendum enim facilisis gravida neque.
        Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Duis at
        tellus at urna condimentum. Ullamcorper eget nulla facilisi etiam
        dignissim diam quis enim. Purus in mollis nunc sed. Lectus sit amet est
        placerat in.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
