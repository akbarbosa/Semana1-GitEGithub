const locaisModel = require("../models/locaisModel");

const getAlllocais = async (req, res) => {
  try {
    const alllocais = await locaisModel.find();
    res.status(200).json(alllocais);
  } catch {
    res.status(500).json({ message: error.message });
  };
};


const addNovoLocal = async (req, res) => {
  try {
    const {
      nome,
      dataDaOcorrência,
      tipoDeCrime,
      bairro,
      
    } = req.body;

    const novoLocal = new locaisModel({
      nome,
      dataDaOcorrência,
      tipoDeCrime,
      bairro,
     
    });
    const savedLocal = await novoLocal.save();
    res
      .status(200)
      .json({ message: "Novo Local de ocorrência registrado!", savedLocal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateLocal = async (req, res) => {
  try {
    const {
      nome,
      dataDaOcorrência,
      tipoDeCrime,
      bairro,
    
    } = req.body;
    const updateLocal = await locaisModel.findByIdAndUpdate(
      req.params.id,
      {
        nome,
        dataDaOcorrência,
        tipoDeCrime,
        bairro,
      }
    );
    res.status(200).json({ message: "Ocorrência atualizada com sucesso"});
  } catch(error) {
  
  res.status(500).json({ message: error.message });
}
};

const deleteLocal = async (req, res) => {
  try {
    const { id } = req.params;
    const findlocais = await locaisModel.findById(id);

    if (findlocais == null) {
      return res.status(404).json({ message: `Local with id ${id} not found` })
    };
    await findlocais.remove();
    res.status(200).json({ message: `Local with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAlllocais,
  addNovoLocal,
  updateLocal,
  deleteLocal,
};