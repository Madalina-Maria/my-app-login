import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'
import LockIcon from '@mui/icons-material/Lock'
import Stack from '@mui/material/Stack'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from '@mui/material/Link'

function LoginFermier() {
  return (
    <div>
      <form>
        <Box display={'flex'}>
          <Box
            display={'grid'}
            gridDirection={'column'}
            maxWidth={600}
            alignItems='center'
            justifyContent={'center'}
            margin={5}
            marginTop={5}
            marginLeft={11}
            padding={5}
            borderRadius={10}
            boxShadow={'10px 10px 10px 15px #ccc'}
            sx={{
              ':hover': {
                boxShadow: '10px 10px 15px #357a38',
              },
            }}
          >
            <Typography
              variant='h4'
              padding={3}
              textAlign='center'
              fontFamily='sans-serif'
              fontStyle='oblique'
            >
              ÎNREGISTRARE
            </Typography>

            <Typography variant='h6' textAlign='center' fontFamily='sans-serif'>
              Ne bucurăm să te avem alături! Te rugăm să iți introduci datele
              pentru a intra în cont:
            </Typography>

            <TextField
              fontFamily='sans-serif'
              margin='normal'
              type={'email'}
              variant='outlined'
              placeholder='Email'
              autoComplete='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>

            <TextField
              fontFamily='sans-serif'
              margin='normal'
              type={'password'}
              variant='outlined'
              placeholder='Parola'
              autoComplete='current-password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>

            <Stack direction='row' spacing={5}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Ține-mă minte'
                />
              </FormGroup>
              <Link
                href='https://www.google.com/webhp?hl=ro&sa=X&ved=0ahUKEwjioNT7rMP3AhWZ7aQKHbeoDuMQPAgI'
                underline='always'
                component={'button'}
                variant={'body1'}
              >
                Ai uitat parola? Click aici
              </Link>
            </Stack>

            <Button
              type='submit'
              sx={{ marginTop: 3, borderRadius: 1 }}
              variant='contained'
              color='success'
              fontFamily='sans-serif'
              size='large'
            >
              INTRĂ ÎN CONT
            </Button>

            <Typography
              paddingTop={3}
              marginBottom={3}
              fontFamily='sans-serif'
              fontSize={16}
              textAlign='center'
            >
              ______ sau ______{' '}
            </Typography>

            <Button
              variant='outlined'
              startIcon={<GoogleIcon />}
              color={'error'}
              size='large'
            >
              Continuă cu Google
            </Button>

            <br></br>

            <Button
              variant='outlined'
              startIcon={<FacebookIcon />}
              size='large'
            >
              Continuă cu Facebook
            </Button>

            <Typography
              paddingTop={5}
              fontFamily='sans-serif'
              fontSize={18}
              textAlign='center'
            >
              Dacă nu ai cont, acum este momentul să îți faci:
            </Typography>

            <Button
              href='http://localhost:3000/register/persoana'
              target={'_blank'}
              variant='outlined'
              color='warning'
              sx={{ marginTop: 3, borderRadius: 1 }}
              fontFamily='sans-serif'
              size='large'
            >
              CREARE CONT
            </Button>
          </Box>
          <Box
            maxWidth={800}
            maxHeight={800}
            alignItems='left'
            justifyContent={'left'}
            marginTop={6.5}
          >
            <img
              width={850}
              height={800}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XLf5812g9a6K4nKsb_fi6wW8rLk9uUEhMztp8Pnz9F1iC2jLmUvYupkK14Cdw1b2C4Y&usqp=CAU'
              alt='img'
            />
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default LoginFermier
