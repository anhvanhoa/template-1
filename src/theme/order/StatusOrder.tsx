import React from 'react';
const listStatus = [
    {
        name: 'Đã giao',
        color: 'green'
    },
    {
        name: 'Đang giao',
        color: '#2563eb'
    },
    {
        name: 'Chờ xác nhận',
        color: '#ea580c'
    },
    {
        name: 'Đã hủy',
        color: '#dc2626',
    },
    {
        name: 'Đã trả hàng',
        color: '#374151',
    }
];

type StatusOrderProps = {
    status: string;
};

const StatusOrder = ({ status }: StatusOrderProps) => {
    const statusItem = listStatus.find(
        (item) => item.name.toUpperCase() === status.toUpperCase()
    );
    return (
        <span
            className={`font-medium px-2 inline-block bg-slate-600 first-letter:uppercase rounded-full py-1 text-xs`}
            style={{ backgroundColor: statusItem?.color, color: '#FFF' }}
        >
            {status}
        </span>
    );
};

export default StatusOrder;
