import db from "../../utils/db"

export default function handler(req, res) {
  db.connectDB();
  res.status(200).json({ name: 'Welcome to Flipkart Shopping' })
}
