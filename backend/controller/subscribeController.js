const Subscriber = require("../models/Subscriber");

const subscribe = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            return res.status(400).json({ error: "Email already subscribed" });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        res.status(201).json({ message: "Subscribed successfully!" });

    } catch (error) {
        console.error("Subscription Error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
};

module.exports = { subscribe };
