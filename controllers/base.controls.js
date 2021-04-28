const { Food } = require("../models");

class Dishes {
  static async createMeal(req, res) {
    const { foodName, prepareTime, isLocal } = req.body;
    try {
      const result = await Food.create({
        foodName,
        prepareTime,
        isLocal,
      });
      res.send({
        status: "success",
        message: "Food successfully made",
        FoodID: result.id,
        FoodName: result.foodName,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  static async fetchSingleMeal(req, res) {
    const { id } = req.params;
    const checkedID = await Food.findAll();
    if (id && id <= checkedID.length) {
      try {
        const result = await Food.findOne({ where: { id } });
        // console.log(result.toJSON());
        res.send({
          status: "success",
          message: `Food with Id of ${id} successfully found`,
          FoodID: result.id,
          Food: result,
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      res.send(`Food with the ID of ${id} not found`);
    }
  }

  static async fetchAllMeal(req, res) {
    try {
      const result = await Food.findAll();
      // console.log(result.toJSON());
      res.send({
        status: "success",
        message: "Entire Food successfully fetch",
        totalNumber: result.length,
        Food: result,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  static async deleteSingleMeal(req, res) {
    const { id } = req.params;
    const checkedID = await Food.findAll();
    if (id && id <= checkedID.length) {
      try {
        const result = await Food.destroy({ where: { id } });
        // console.log(result.toJSON());
        res.send({
          status: "success",
          message: `Food with Id of ${id} successfully deleted`,
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      res.send(`Food with the ID of ${id} doesn't exist`);
    }
  }

  static async updateMeal(req, res) {
    const { id } = req.params;
    const { foodName, prepareTime, isLocal } = req.body;
    const checkedID = await Food.findAll();
    if (id && id <= checkedID.length) {
      try {
        const result = await Food.update(
          { foodName, prepareTime, isLocal },
          { where: { id } }
        );
        res.send({
          status: "success",
          message: `Food with the ID of ${id} successfully Updated`,
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      res.send(`Food with the ID of ${id} doesn't exist`);
    }
  }
}

module.exports = Dishes;
