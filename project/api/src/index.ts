// api/src/index.ts
import express from 'express';
import { connect } from 'mqtt';
import AC from './entities/AC';
import ACStatus from './entities/ACStatus';


const app = express();
const port = 3000;
app.use(express.json());

const client = connect(process.env.MQTT_BROKER || 'mqtt://localhost:1883');


const acsData: Map<string, AC> = new Map();

client.on('connect', () => {
  console.log('Conectado al broker MQTT');
  client.subscribe('homeassistant/ac/+/status');
});


client.on('message', (topic, message) => {
  const acId = topic.split('/')[2];
  const status: ACStatus = JSON.parse(message.toString());
  
  if (acsData.has(acId)) {
    const ac = acsData.get(acId);
    if (ac) {
      ac.status = status;
      acsData.set(acId, ac);
    }
  }
});


app.get('/api/acs', (req, res) => {
  res.json(Array.from(acsData.values()));
});

app.get('/api/acs/:id', (req, res) => {
  const ac = acsData.get(req.params.id);
  if (ac) {
    res.json(ac);
  } else {
    res.status(404).json({ error: 'AC no encontrado' });
  }
});

app.post('/api/acs', (req, res) => {
  const newAC: AC = req.body;
  acsData.set(newAC.id, newAC);
  res.status(201).json(newAC);
});

app.listen(port, () => {
  console.log(`API escuchando en puerto ${port}`);
});