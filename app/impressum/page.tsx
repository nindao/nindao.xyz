import React from 'react'

import Header from '../lib/components/Header'
import Footer from '../lib/components/Footer'


const Impressum: React.FC = () => {
  return (
    <div
      className='App d-flex flex-column justify-content-between'
      style={{ minHeight: '100vh' }}
    >
      <Header />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 my-5'>
            <h1 className='h1 mb-4'>
            Impressum
            </h1>
            <br />
            Angaben gemäß § 5 TMG<br />
            <br />
            Nindao GbR <br />
            Immanuelkirchtstr. 9 <br />
            10405 Berlin<br />
            Deutschland<br />
            <br />
            Vertreten durch den Geschäftsführer:<br />
            Arseny Akinfiev, Ilja Solomonovs <br />
            <br />
            Kontakt:<br />
            E-Mail: <a href='mailto:hello@nindao.xyz'>hello@nindao.xyz</a><br />
            <br />
            Umsatzsteuer-ID: 31/203/04273<br />
            <br />
            <br />
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
            Arseny Akinfiev, Ilja Solomonovs <br />
            <br />
            <br />
            Streitschlichtung:<br />
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href='https://ec.europa.eu/consumers/odr' rel='noreferrer' target='_blank'>https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
            <br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Impressum
