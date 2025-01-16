import express from 'express';
import ensureAuthentication from '../middlewares/Auth.js';
import Bill from '../models/Bill.js';

const router = express.Router();

// get all bills for a specific user
router.get('/:userId', ensureAuthentication, async (req, res) => {
    try {
    const { userId } = req.params;
    const bills = await Bill.find({ user_id: userId });
    if (!bills || bills.length === 0) {
        return res.status(404).json({ success: false, message: 'No bills found'});
    }
    res.status(200).json(bills);
    } catch (error) {
    res.status(500).json({ message: 'Error fetching bills', error });
    }
});
    
// Add a new bill
router.post('/add-bill', ensureAuthentication, async (req, res) => {
    try {
    const { user_id, title, amount, status, description } = req.body;

    const newBill = new Bill({
        user_id,
        title,
        amount,
        status,
        description,
    });

    await newBill.save();
    res.status(201).json(newBill);
    } catch (error) {
    res.status(500).json({ message: 'Error adding bill', error });
    }
});

// Delete a specific bill
router.delete('/:billId', ensureAuthentication, async (req, res) => {
    try {
    const { billId } = req.params;
    const deletedBill = await Bill.findByIdAndDelete(billId);

    if (!deletedBill) {
        return res.status(404).json({ message: 'Bill not found' });
    }

    res.status(200).json({ message: 'Bill deleted successfully' });
    } catch (error) {
    res.status(500).json({ message: 'Error deleting bill', error });
    }
});

export default router;
