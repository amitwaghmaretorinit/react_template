import { Switch as SwitchComponent } from 'antd';
import { SwitchChangeEventHandler } from 'antd/lib/switch';
import React from 'react';

import { Container } from './styles';
interface SwitchProps{
  checked:boolean,
  onChange?: SwitchChangeEventHandler;
}
function Switch(props:SwitchProps) {
  const {checked,onChange}=props;
   return (
     <Container>
         <SwitchComponent onChange={onChange} checked={checked}/>
     </Container>
    
  )
}

export default Switch