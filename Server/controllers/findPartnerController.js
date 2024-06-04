import RoomPartner from '../models/findPartnerModel.js'

export const findPartner = async (req, res) => {

  const { fname, lname, work, selection, roomPrice, phoneNumber } = req.body

  try { 

    const roomPartner = new RoomPartner({
      fname,
      lname,
      work,
      selection,
      roomPrice,
      phoneNumber
    })

    await roomPartner.save()
    console.log(roomPartner)

    // const existUser = new RoomPartner.find({phoneNumber})
    // const allPartner = existUser.filter((item)=>{
    //   return item.phoneNumber !== phoneNumber
    // })
    return res.status(201).json({ message: "successfull", alert: true, roomPartner })
  } catch (error) {
    return res.status(400).json({ message: "failed", alert: false })
  }
}