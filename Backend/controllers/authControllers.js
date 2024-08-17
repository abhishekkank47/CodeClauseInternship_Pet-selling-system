import { hashing, comparing } from "../Helper/PasswordHash.js";
import { userModel } from "../Models/userModel.js";

//REGISTER CONTROLLER
export const registerController = async (req, res) => {
  try {

    const { fullName, phone, email, address, pin, password, confirmPassword } = req.body;

    //VALIDATION
    if ( !fullName || !phone || !email || !address || !pin || !password || !confirmPassword ) 
        {
           return res.status(400).send({
                success: false,
                message: "ALL FEILDS ARE REQUIRED TO FILLED",
            });
        }

    //CONFIRM PASSWORD MATCH CHECK
    if (password !== confirmPassword) {
        return res.status(400).send({
          success: false,
          message: "PASSWORDS DO NOT MATCH, PLEASE RE-ENTER",
        });
      }

    //CHECK USER
    const userExist = await userModel.findOne({email})

    //EXISTING USER
    if (userExist) {
     return res.status(200).send(
        { 
            success: false, 
            message: "EMAIL IS ALREADY REGISTERED, PLEASE LOGIN TO CONTINUE" 
        });
    }

    //PASSWORD HASH
    const hashedPassword = await hashing( password )

    //SAVING DATA AS NEW USER IN DATABASE
    const user = new userModel({fullName, phone, email, address, pin, password:hashedPassword, confirmPassword:hashedPassword}).save();
    res.status(201).send(
        {
            success: true,
            message:'USER REGISTERED SUCCESFULLY',
            user : { fullName,email,phone,address,pin}
        }
    )

  } catch (error) {
    console.log(`ERROR IN REGISTRATION : ${error}`);
    res.status(500).send({
      success: false,
      message: "ERROR IN REGISTRATION",
    });
  }
};

//LOGIN CONTROLLER
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //FIND USER
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "USER NOT FOUND",
      });
    }

    //REGISTER PASSWORD == LOGIN PASSWORD ?
    const isMatch = await comparing(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        message: "INVALID CREDENTIALS",
      });
    }

    //LOGIN SUCCESS
    res.status(200).send({
      success: true,
      message: "LOGIN SUCCESSFUL",
      user
    });

  } catch (error) {
    console.log(`ERROR IN LOGIN : ${error}`);
    res.status(404).send({
      success: false,
      message: "ERROR IN LOGIN",
    });
  }
};
