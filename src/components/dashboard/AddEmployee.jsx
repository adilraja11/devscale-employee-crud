'use client'

import React, { useState } from 'react';
import {Autocomplete, AutocompleteItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const AddEmployee = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [department, setDeparment] = useState('');
    const [status, setStatus] = useState('');

    function onInputRoleChange(value) {
        setRole(value);
    }
    function onInputDepartmentChange(value) {
        setDeparment(value);
    }
    function onInputStatusChange(value) {
        setStatus(value);
    }

    async function handleCreateEmployee(onClose) {
        try {
            const res = await fetch("https://v1.appbackend.io/v1/rows/0tYfIvqkRXwi", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([{ name, email, role, department, status }]),
            });
            const data = await res.json();
            router.refresh();
        } catch (error) {
            console.error(error);
        }
        onClose();
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
        <Button 
            onPress={onOpen}
            className='font-bold' 
            variant='shadow' 
            size="md" 
            radius='md' 
            color='warning'>
            Add New Employee
        </Button>
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement='top-center'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Employee</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    variant="bordered"
                                    value={name}
                                    onValueChange={setName}
                                />
                                <Input
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    value={email}
                                    onValueChange={setEmail}
                                />
                                <Autocomplete
                                    label="Select Role"
                                    placeholder="Select Role"
                                    onInputChange={onInputRoleChange}
                                    >
                                        <AutocompleteItem key='manager'>Manager</AutocompleteItem>
                                        <AutocompleteItem key='senior'>Senior</AutocompleteItem>
                                        <AutocompleteItem key='associate'>Associate</AutocompleteItem>
                                </Autocomplete>
                                <Autocomplete
                                    label="Select Departement"
                                    placeholder="Select Departement"
                                    onInputChange={onInputDepartmentChange}
                                    >
                                        <AutocompleteItem key='hrd'>Human Resources</AutocompleteItem>
                                        <AutocompleteItem key='it'>Information Technology</AutocompleteItem>
                                        <AutocompleteItem key='product'>Product</AutocompleteItem>
                                        <AutocompleteItem key='design'>Design</AutocompleteItem>
                                </Autocomplete>
                                <Autocomplete
                                    label="Select Status"
                                    placeholder="Select Status"
                                    onInputChange={onInputStatusChange}
                                    >
                                        <AutocompleteItem key='active'>Active</AutocompleteItem>
                                        <AutocompleteItem key='paused'>Paused</AutocompleteItem>
                                        <AutocompleteItem key='vacation'>Vacation</AutocompleteItem>
                                </Autocomplete>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                                </Button>
                                <Button color="warning" onPress={() => handleCreateEmployee(onClose)}>
                                Add New Employee
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
        </Modal>
    </div>
  )
}
