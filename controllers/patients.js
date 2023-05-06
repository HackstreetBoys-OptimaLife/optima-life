const Patient = require('../models/Patient');
const Record = require('../models/Record');

exports.getPatientByHealthCardId = async (req, res, _next) => {
  const { id } = req.params;

  const patient = await Patient.findOne(
    { healthCardId: id },
  );

  res.status(200).json({
    success: true,
    data: patient
  });
};

exports.getPatientByToken = async (req, res, _next) => {
  const { token } = req.query;

  console.log(token);
  const patient = await Patient.findOne(
    { token: token },
  );

  res.status(200).json({
    success: !!patient,
    data: patient
  });
};

exports.getRecordsByPatient = async (req, res, _next) => {
  const { patientId } = req.params;
  const records = await Record.findOne(
    { patientId: patientId },
  );

  res.status(200).json({
    success: true,
    data: records,
  });
};

exports.postRecord = async (req, res, _next) => {
  await Record.create(req.body);
  res.status(200).json({ success: true });
};

exports.postPatient = async (req, res, _next) => {
  const { healthCardId } = req.body;

  if(!healthCardId) {
   return res.status(200).json({ success: false, message: 'Health Card Id is required' });
  }

  const result = await Patient.findOneAndUpdate(
    { healthCardId: req.body.healthCardId },
    { healthCardId: req.body.healthCardId },
    { upsert: true, new: true }
  );

  await Record.create({ ...req.body, patientId: result._id });
  res.status(200).json({ success: true, patientId: result._id, date: new Date() });
};
