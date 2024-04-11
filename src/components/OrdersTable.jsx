    import React, { useState, useEffect } from 'react';
    import { supabase } from '../supabaseClient';

    const OrdersTable = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Function to fetch data from Supabase table
        const fetchOrders = async () => {
        try {
            const { data, error } = await supabase
            .from('orders')
            .select('id, name, items, bill')
            .order('id', { ascending: true });
            
            if (error) {
            throw error;
            }
            

            if (data) {
            setOrders(data);
            }
        } catch (error) {
            console.error('Error fetching orders:', error.message);
        }
        };

        // Fetch orders initially
        fetchOrders();
    }, []);

    return (
        <div>
        <center><h1 className='text-xl py-2 font-bold'>Orders</h1></center>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Items</th>
                <th>Bill</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(order => (
                <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.items}</td>
                <td>{order.bill}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default OrdersTable;
