import { Button, Flex, Grid, Image, Input, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Antonio S</title>
        <meta name="description" content="UX/UI portfolio - Antonio S" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
      as="main"
      height="100vh"
      templateColumns=" 1fr 500px"
      templateRows="1fr"
      templateAreas="
    'form logo'
    'form logo'
    'form logo'
    "
      justifyContent="center"
      alignItems="center"
      >
        <Flex
        as={"form"}
        justifyContent="center"
        gridArea="logo"
        height="100%"
        flexDir="column"
        alignItems="stretch"
        backgroundColor="#FFFFFF"
        padding={16}
        >
          <Image
          src='/brand.png'
          alt='logo'
          width="100%"
          alignSelf='center'  
        />
        <Stack spacing={2}>
          <Input
            name={"email"}
            placeholder={"Email"}
            focusBorderColor="black" />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            focusBorderColor="black" />
        </Stack>
        <Button
          type="submit"
          marginTop={2}
          variant={"filled"}
          borderRadius={"4px"}
          height="50px"
          width="100%"
          mt={"4"}
          backgroundColor={"black"}
          _hover={{ backgroundColor: "#ee931b" }}
          color={"white"} >
          Entrar
        </Button>
        </Flex>

        <Flex
        gridArea="form"
        flexDir="column"
        alignItems="center"
        overflowY="auto"
        height={"100vh"}
      >
        {/* <Image
          height={"100%"}
          src='/home_cover.png'
          alt='logo'
          objectFit={"cover"}
        /> */}
      </Flex>
      </Grid>

    </ div>
  )
}

export default Home
