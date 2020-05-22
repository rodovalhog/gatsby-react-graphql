import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'


const AboutPage = () => (<Layout>
    <SEO title="About"/>
    <h1>About Page</h1>
    <p>Essa e a pagina about que foi criada recentemente e ja está funcionando tudo como o esperado.</p>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
    </ul>
</Layout>)

export default AboutPage;