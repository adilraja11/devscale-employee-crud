'use client'

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import { EditIcon } from "../../../public/EditIcon.jsx";
import { DeleteIcon } from "../../../public/DeleteIcon.jsx";

export const EmployeeList = ({ data }) => {
    function isStatusColor(user) {
        if (user === 'Active') {
            return "success";
        }
        if (user === 'Paused') {
            return "danger";
        }
        if (user === 'Vacation') {
            return "warning";
        }
    }

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
            return (
                <User
                    description={user.age}
                    name={cellValue}
                >
                {user.email}
                </User>
            );
            case "role":
            return (
                <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{cellValue}</p>
                <p className="text-bold text-sm capitalize text-default-400">{user.department}</p>
                </div>
            );
            case "status":
            return (
                <Chip className="capitalize" color={isStatusColor(user.status)} size="sm" variant="flat">
                {cellValue}
                </Chip>
            );
            case "actions":
            return (
                <div className="relative flex items-center gap-2">
                <Tooltip content="Edit user">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                    </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                    </span>
                </Tooltip>
                </div>
            );
            default:
            return cellValue;
        }
        }, []);
    
      return (
        <Table aria-label="Example table with custom cells">
            <TableHeader>
                <TableColumn key='name' align={"start"}>NAME</TableColumn>
                <TableColumn key='role' align={"start"}>ROLE / DEPARTMENT</TableColumn>
                <TableColumn key='status' align={"start"}>STATUS</TableColumn>
                <TableColumn key='actions' align={"center"}>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody items={data}>
                {(item) => (
                <TableRow key={item._id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
      );
}
