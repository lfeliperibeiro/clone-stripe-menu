import React from 'react';

import {Products, Developers, Company} from '../../Content';
import {Container, DropdownStyles} from './styles';
import {DropdownProvider ,DropdownOption} from '../Dropdown';

function Navbar() {
    return (
        <DropdownProvider>            
        <DropdownStyles>      
        <Container>
            <ul>
                <li>
                    <DropdownOption 
                    name="Produtos"
                    content={Products}
                    />
                </li>
                <li>
                    <DropdownOption 
                    name="Desenvolvedores"
                    content={Developers}
                    />
                </li>
                <li>
                    <DropdownOption 
                    name="Empresa"
                    content={Company}
                    />
                </li>
            </ul>
        </Container>
        </DropdownStyles>
        </DropdownProvider>


    )
};

export default Navbar;