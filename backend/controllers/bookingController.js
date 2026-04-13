const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    try {
        const { eventId, eventName, quantity, totalPrice, bookingDate } = req.body;
        
        const booking = new Booking({
            userId: req.user.id,
            eventId,
            eventName,
            quantity,
            totalPrice,
            bookingDate
        });
        
        const createdBooking = await booking.save();
        res.status(201).json(createdBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (booking) {
            if (booking.userId.toString() !== req.user.id.toString()) {
                return res.status(401).json({ message: "Not authorized" });
            }
            booking.status = 'Cancelled';
            const updatedBooking = await booking.save();
            res.json(updatedBooking);
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
