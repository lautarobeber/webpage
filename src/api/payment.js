import axios from "./axios";

export const paymentCreateRequest = async () => axios.post('/create-order');
export const paymentSuccesRequest = async () => axios.get('/succes');
export const paymentWebhookRequest = async () => axios.post('/webhook');
export const getOrdersRequest = async () => axios.get('/orders')

