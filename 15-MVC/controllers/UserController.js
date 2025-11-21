import User from "../models/User.js"

export const userRegister = async (req, res) => {
  try {
    const { name, email, phone, age, password } = req.body;
    if (!name && !email && !phone) {
      console.log("Every field is Required.");
    }
    const formData = {
      name,
      email,
      phone,
      age,
      password,
    };
    const newUser = await User.create(formData);
    res.json({
      message: "Form data has been submitted.",
      user: newUser,
      success: true,
    });
  } catch (error) {
    console.log("Error:", error);
    res.json({ message: "Error while submitting the form.", success: false });
  }
};
