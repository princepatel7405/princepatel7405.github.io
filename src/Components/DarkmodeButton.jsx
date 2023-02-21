import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

const DarkmodeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
           {colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
        </Button>
      </header>
    )
}

export default DarkmodeButton