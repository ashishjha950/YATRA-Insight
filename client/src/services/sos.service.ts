import api from './api';

export const addEmergencyContact = (data: {
  name: string;
  phone: string;
  relation: string;
}) => {
  return api.post('/sos/emergency', data);
};

export const getEmergencyContacts = () => {
  return api.get('/sos/emergency');
};

export const deleteEmergencyContact = (id: string) => {
  return api.delete(`/sos/emergency/${id}`);
};

