const userDetails = require("../Model/FormSchema");

const postForm = async (req, res) => {
  try {
    const { name, email, gender, age, phoneNumber, Address, Location, Job } =
      req.body;

    const newData = new userDetails({
      name: name,
      email: email,
      gender: gender,
      age: age,
      phoneNumber: phoneNumber,
      Address: Address,
      Location: Location,
      Job: Job,
    });

    await newData.save();

    res
      .status(200)
      .json({ message: "Form data saved successfully", data: newData });
  } catch (error) {
    console.error(error, "formData error");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const userList =async (req, res) => {

  try {
    const userData = await userDetails.find();
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

const editdata = async (req, res) => {
  try {
    const {userId} = req.params.userId;
    console.log(userId)
    const { name, email, gender, age, phoneNumber, Address, Location, Job } = req.body;
    console.log(req.body); 
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Internal server error' });
  }
};


const deleteUser=async (req,res)=>{
  const userId = req.params.userId
  try {
    const deleteUser= await userDetails.findByIdAndDelete(userId)
    res.status(200).json({message:'user Deleted'})
  } catch (error) {
    console.error(error);
    res.status(400).json({message:'internal server error'})
  }
}

module.exports = { postForm ,userList, editdata, deleteUser};
