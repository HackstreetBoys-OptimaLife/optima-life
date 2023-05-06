const Player = require('../models/player');

exports.getPlayerByUuid = async (req, res, _next) => {
  const { patientId } = req.params;

  try {
    const player = await Player.findOne({ uuid });

    if (!player) {
      return res.status(404).json({
        success: false,
        message: 'Player not found',
      });
    }

    res.status(200).json({
      success: true,
      data: player,
    });
  } catch (error) {
    console.error('Error getting player', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

exports.createPlayer = async (req, res, _next) => {
  console.log("player", req.body);
  const { patientId } = req.body;

  try {
    const existingPlayer = await Player.findOne({ patientId  });

    if (existingPlayer) {
      return res.status(400).json({
        success: false,
        message: 'Player with the given already exists',
      });
    }

    const player = await Player.create(req.body);

    res.status(201).json({
      success: true,
      data: player,
    });
  } catch (error) {
    console.error('Error creating player', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

exports.createPlayerSession = async (req, res, _next) => {
  const { uuid } = req.params;
  const sessionData = req.body;

  try {
    const player = await Player.findOne({ uuid });

    if (!player) {
      return res.status(404).json({
        success: false,
        message: 'Player not found',
      });
    }

    player.sessions.push({ sessionData });
    await player.save();

    res.status(200).json({
      success: true,
      message: 'Player session created',
    });
  } catch (error) {
    console.error('Error creating player session', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
