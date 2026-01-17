import { User } from "../../models/user.model.js";

export const avarageController = async (req, res) => {
  try {
    const avarage = await User.aggregate([
      {
        $group: {
        //   _id: null,         // for all field are conbined
          _id: "$gender",       // group by gender
          avarageAge: {
            $avg: "$age",       // which field will be avarage
          },
        },
      },
    ]);

    return res.status(200).json({ message: "avarage by age", avarage });
  } 
  catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
