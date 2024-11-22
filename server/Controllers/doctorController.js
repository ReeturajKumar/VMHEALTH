import Doctor from "../Models/doctorSchema.js";

// updating Doctor
export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(id, 
      {$set : req.body}, 
      { new: true });

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// deleting Doctor
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// get single Doctor
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate("reviews").select("-password");
    res.status(200).json({
      success: true,
      message: "Doctor found successfully",
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to find Doctor",
    });
  }
};

//get all Doctor
export const getAllDoctor = async (req, res) => {
  try {
    const {query} = req.query
    let doctors;

    if(query){
     doctors = await Doctor.find({isApproved: 'approved', $or: [{
      name: { $regex: query, $options: "i" }},
      {speciality: { $regex: query, $options: "i" }}
    ]}).select("-password");
    } else {
      doctors = await Doctor.find({isApproved: 'approved'}).select("-password");
    }
    res.status(200).json({
      success: true,
      message: "Doctors found successfully",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};