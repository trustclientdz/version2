import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const { phone } = req.query;
  const client = await clientPromise;
  const db = client.db("trustclientdz");
  const collection = db.collection("reports");

  const reports = await collection.find({ phone }).toArray();
  const count = reports.length;

  let status = 'green';
  if (count === 1) status = 'blue';
  else if (count === 2) status = 'orange';
  else if (count >= 3) status = 'red';

  res.status(200).json({ phone, count, status });
}
