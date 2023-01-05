import { response } from 'express'
import user from '../models/userschema.js'
export const insertUser = async (req, res) => {
  const Players = req.body
  const newPlayers = new user(Players)

  try {
    await newPlayers.save()
    res.status(201).json(newPlayers)
  } catch (error) {
    res.status(409).json({ messages: 'Internal Server user by node' })
  }
}

export const getUser = async (req, res) => {
  try {
    // console.log(user.find({}).json())
    const internalPlayer = await user.find({})
    res.status(200).json(internalPlayer)
  } catch (error) {
    res.status(404).json({ messages: 'Syntax_erros_happens' })
  }
}
