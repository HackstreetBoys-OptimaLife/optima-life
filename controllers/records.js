exports.getRecords = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: [{ id: 1, name: "John Doe" }, { id: 2, name: "Adam Smith"}]
  });
};
