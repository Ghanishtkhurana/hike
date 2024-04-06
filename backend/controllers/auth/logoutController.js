const logoutController = async (req, res) => {
  try {
    res.cookie("hike", "", { httpOnly: true, maxAge: 0, sameSite: "none" });
    return res.status(200).json({ message: "User logged out", status: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = logoutController;
