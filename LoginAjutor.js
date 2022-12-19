import * as React from 'react'
import './LoginAjutor.css'
import Box from '@mui/material/Box'
import logo from '../Poze/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'

function LoginAjutor() {
  return (
    <div className='LoginAjutor'>
      <form>
        <header>
          <AppBar
            position='static'
            style={{
              display: 'grid',
              backgroundColor: 'white',
              paddingTop: '10px',
              paddingLeft: '10px',
            }}
          >
            <a href='http://localhost:3000/'>
              <img src={logo} alt='logo' width={200} height={150}></img>
            </a>
            <h1
              style={{
                textAlign: 'center',
                color: 'Black',
                fontSize: '50px',
                marginTop: '-110px',
                fontFamily: 'monospace',
                fontStyle: 'italic',
              }}
            >
              Ajutor
            </h1>
          </AppBar>
        </header>
        <Box>
          <h1 style={{ marginLeft: '75px', marginTop: '50px', color: 'black' }}>
            Opțiunile pe care le aveți pentru a vă înregistra sunt:
          </h1>
          <ul
            style={{
              color: 'black',
              marginLeft: '100px',
              marginTop: '25px',
            }}
          >
            <li style={{ marginBottom: '25px' }}>
              <h2>FERMIER / PERSOANĂ JURIDICĂ</h2>
              <h3
                style={{
                  color: 'gray',
                  marginLeft: '50px',
                }}
              >
                <p>
                  In sens larg, <i>persoana juridică</i> "reprezintă" o firmă,
                  institutie, asociatie, organizatie, societate comerciala.
                </p>
                <p>
                  Alegeți această variantă pentru a vă înregistra dacă v-ați
                  creat deja un cont pe platformă de persoană juridică.
                </p>
              </h3>
            </li>
            <li>
              <h2>PERSOANĂ FIZICĂ</h2>
              <h3 style={{ color: 'gray', marginLeft: '50px' }}>
                <p>
                  În sens larg, <i>persoana fizică</i> este orice persoana care
                  nu deține niciuna dintre tipurile de firme existente.
                </p>
                <p>
                  Alegeți această variantă de a vă înregistra dacă v-ați creat
                  deja un cont pe platformă de persoană fizică.
                </p>
              </h3>
            </li>
          </ul>
          <Stack direction='row' spacing={5}>
            <h1
              style={{ marginLeft: '75px', marginTop: '50px', color: 'black' }}
            >
              Pentru a vă înregistra apăsați
            </h1>
            <Button
              href='http://localhost:3000/login'
              target={'_self'}
              variant='outlined'
              color='warning'
              fontFamily='sans-serif'
              size='large'
              style={{ marginTop: '55px', marginBottom: '55px' }}
            >
              ÎNREGISTRARE
            </Button>
          </Stack>
        </Box>
      </form>
    </div>
  )
}

export default LoginAjutor
