import RoomPartner from '../models/findPartnerModel.js'

export const getPartner = async (req,res) =>{
  try{
    const user = await RoomPartner.findOne({userId: req.user.id})

    if(!user){
      return res.status(400).json({message: "no account found"})
    }
    const partners = await RoomPartner.find({userId: {$ne:req.user.id}})
    res.json({user, partners})
  }catch(error){
    return res.status(400).json(error)
  }
}

export const findPartner = async (req, res) => {

  const { fname, lname, work, book, selection, roomPrice, phoneNumber } = req.body
  console.log(req.user) 

  try { 

    const roomPartner = new RoomPartner({
      fname,
      lname,
      work,
      selection,
      roomPrice,
      book,
      phoneNumber,
      userId: req.user.id
    })

    await roomPartner.save()

    return res.status(201).json({ message: "successfull", alert: true })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "failed", alert: false })
  }
}