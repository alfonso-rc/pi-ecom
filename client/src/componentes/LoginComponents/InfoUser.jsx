import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Profile from './Profile';

function InfoUser() {
    const [drop, setDrop] = useState(false);

    const operCloseDrop = () => {
        setDrop(!drop);
    };
    return (
        <div>
            <Dropdown isOpen={drop} toggle={operCloseDrop}>
                <DropdownToggle caret>
                    name user
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>Accion 1</DropdownItem>
                    <DropdownItem>Accion 2</DropdownItem>
                    <DropdownItem>Accion 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default InfoUser;
