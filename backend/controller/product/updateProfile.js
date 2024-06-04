const userModel = require('../../models/userModel');

async function updateProfileController(req, res) {
    try {
        const { _id, profilePic } = req.body;

        if (!_id) {
            return res.status(400).json({
                message: "User ID is required",
                error: true,
                success: false,
            });
        }

        const updateProfile = await userModel.findByIdAndUpdate(
            _id,
            { profilePic },
            { new: true }
        );

        if (!updateProfile) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false,
            });
        }

        res.json({
            message: "Profile updated successfully",
            data: updateProfile,
            success: true,
            error: false,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = updateProfileController;
