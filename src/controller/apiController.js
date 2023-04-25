const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "testApi",
  });
};

const handleRegister = (req, res) => {
  console.log("mee", req.body);
};

module.exports = {
  testApi,
  handleRegister,
};
