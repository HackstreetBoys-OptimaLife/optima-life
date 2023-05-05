exports.registerUser = async (req, res, _next) => {
  res.status(201).json({
    success: true,
    data: "OK",
  });
};
