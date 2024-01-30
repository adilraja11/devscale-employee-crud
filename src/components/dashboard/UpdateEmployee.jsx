'use client'

import React, { useState } from 'react';
import {Autocomplete, AutocompleteItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { EditIcon } from "../../../public/EditIcon.jsx";
import toast from 'react-hot-toast';

export const UpdateEmployee = ({item}) => {
    const router = useRouter();
    const [name, setName] = useState(item.name);
    const [email, setEmail] = useState(item.email);
    const [role, setRole] = useState(item.role);
    const [department, setDeparment] = useState(item.department);
    const [status, setStatus] = useState(item.status);

    function onInputRoleChange(value) {
        setRole(value);
    }
    function onInputDepartmentChange(value) {
        setDeparment(value);
    }
    function onInputStatusChange(value) {
        setStatus(value);
    }

    async function handleUpdateEmployee(onClose) {
        try {
            const res = await fetch("https://v1.appbackend.io/v1/rows/0tYfIvqkRXwi", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: item._id, name, email, role, department, status }),
            });
            const data = await res.json();
            console.log(data);
            router.refresh();
        } catch (error) {
            console.error(error);
        }
        onClose();
        toast.success('Employee berhasil di Ubah');
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
        <Button
            isIconOnly
            onPress={onOpen}
            variant='shadow' 
            color='warning'>
            <EditIcon />
        </Button>
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement='top-center'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Update Employee</ModalHeader>
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
                                    defaultInputValue={role}
                                    label="Select Role"
                                    placeholder="Select Role"
                                    onInputChange={onInputRoleChange}
                                    >
                                        <AutocompleteItem key='manager'>Manager</AutocompleteItem>
                                        <AutocompleteItem key='senior'>Senior</AutocompleteItem>
                                        <AutocompleteItem key='associate'>Associate</AutocompleteItem>
                                </Autocomplete>
                                <Autocomplete
                                    defaultInputValue={department}
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
                                    defaultInputValue={status}
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
                                <Button color="warning" onPress={() => handleUpdateEmployee(onClose)}>
                                Update Employee
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
        </Modal>
    </div>
  )
}
