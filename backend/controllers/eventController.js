const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        const createdEvent = await event.save();
        res.status(201).json(createdEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const { name, date, time, location, description, price, image } = req.body;
        const event = await Event.findById(req.params.id);

        if (event) {
            event.name = name || event.name;
            event.date = date || event.date;
            event.time = time || event.time;
            event.location = location || event.location;
            event.description = description || event.description;
            event.price = price || event.price;
            event.image = image || event.image;

            const updatedEvent = await event.save();
            res.json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (event) {
            await Event.deleteOne({ _id: req.params.id });
            res.json({ message: 'Event removed' });
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
