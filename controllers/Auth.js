const SignupFunctions = require('../functions/auth');


require('dotenv').config();

const signUp = async (req, res) =>{

    const{username, fullname, phone, email} = req.body;

    try {
        // Check if user already exists
        const existingUser = users.find(user => user.email === email || user.username === username || user.phone === phone);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password and save the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { email, username, phone, password: hashedPassword };
        users.push(newUser);

        res.status(201).json({ message: 'User created', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

const login = async (req, res) => {
    const { email, username, phone, password } = req.body;

    try {
        // Find the user by email, username, or phone
        const user = users.find(user => user.email === email || user.username === username || user.phone === phone);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email, username: user.username, phone: user.phone }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

const logout = (req, res) => {
    // In a real-world scenario, you'd invalidate the token here (e.g., using a blacklist)
    res.json({ message: 'Logged out successfully' });
};

module.exports = {
    signup,
    login,
    logout
};
