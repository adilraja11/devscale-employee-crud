'use client'

import React, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { DeleteIcon } from "../../../public/DeleteIcon.jsx";
import toast from 'react-hot-toast';

export const DeleteEmployee = ({item}) => {
    const router = useRouter();
    const [name, setName] = useState(item.name);

    async function handleDeleteEmployee(onClose) {
        try {
            const res = await fetch("https://v1.appbackend.io/v1/rows/0tYfIvqkRXwi", {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify([item._id]),
            });
            const data = await res.json();
            router.refresh();
        } catch (error) {
            console.error(error);
        }
        onClose();
        toast.success('Employee berhasil di Hapus');
    }

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
        <Button
            isIconOnly
            onPress={onOpen}
            variant='shadow' 
            color='danger'>
            <DeleteIcon />
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
                                <p>Are You Sure to Delete This Employee?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                No
                                </Button>
                                <Button color="warning" onPress={() => handleDeleteEmployee(onClose)}>
                                Yes
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
        </Modal>
    </div>
  )
}
