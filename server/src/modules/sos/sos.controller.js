
import EmergencyContact from "./sos.model.js"

export const addEmergencyContact = async (req, res) => {
  try {
    const { name, phone, relation } = req.body;

    const contact = await EmergencyContact.create({
      userId: req.user.id,
      name,
      phone,
      relation,
    });

    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEmergencyContacts = async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const deleteEmergencyContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await EmergencyContact.findOneAndDelete({
      _id: id,
      userId: req.user.id, // 🔐 user safety
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ success: true, message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




export const triggerSOS = async (req, res) => {
  const { latitude, longitude } = req.body

  // Placeholder: later integrate SMS / authority APIs
  console.log('🚨 SOS:', latitude, longitude, 'User:', req.user.id)

  res.json({
    status: 'SOS triggered',
    location: { latitude, longitude }
  })
}
