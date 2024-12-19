const axios = require("axios");

const getAllLaunches = async (req, res) => {
  try {
    const { data } = await axios.get("https://api.spacexdata.com/v5/launches");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching launches:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching launches" });
  }
};

module.exports = {
  getAllLaunches,
};
