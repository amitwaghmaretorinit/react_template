import { Flex } from '@atom/Flex'
import { H1, H2, H3 } from '@constant/typography/Typography'
import React from 'react'

function HomePage() {
  const components = ['Global state management', 'A network layer', 'Component library integration', 'Route configuration, lazy loading']
  return (
    <Flex direction='column' alignItems={'center'}>
      <H1 text={'React Template'} />

      <H2 text={'An enterprise react template application showcasing'} style={{marginTop:20}} />
       <Flex direction='column' alignItems={'start'} top={10}>
       {
        components.map((i: string) => {
          return <Flex alignItems={'center'}>- &nbsp;<H3 text={i} key={i} /></Flex>
        })
      }
       </Flex>

    </Flex>
  )
}

export default HomePage