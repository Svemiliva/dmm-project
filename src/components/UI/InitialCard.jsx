import React from 'react';
import { Link } from "react-router-dom"
import "../../App.css"
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

const InitialCard= () => (
   <div className='card'>
      <EuiCard 
        textAlign="left"   
        image={
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oG3dtCmAl6wMJkKJHZUEvGI59V8zsNIRnQzslX0muC0D9D9EquiogPaw5OJ7bMQUAV8&usqp=CAU"
              alt="events"
            />
          </div>
        }
        description="Click below to see more..."
        footer={
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <Link to={"/events"}>
                <EuiButton>Go for it</EuiButton>
              </Link>
            </EuiFlexItem>
          </EuiFlexGroup>
        }
      />
  </div>

);
export default InitialCard;