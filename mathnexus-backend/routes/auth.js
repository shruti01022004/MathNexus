import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = express.Router();


// ================= SIGNUP =================
router.post("/signup", async(req, res) => {
    try {

        const { name, email, password } = req.body;

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                msg: "User already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            success: true,
            msg: "Signup successful",
            user,
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            msg: "Server Error",
        });
    }
});


// ================= LOGIN =================
router.post("/login", async(req, res) => {

    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: "User not found",
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                msg: "Invalid credentials",
            });
        }

        // Token
        const token = jwt.sign({ id: user._id },
            process.env.JWT_SECRET, {
                expiresIn: "7d",
            }
        );

        res.json({
            success: true,
            token,
            user,
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            msg: "Server Error",
        });
    }
});

export default router;