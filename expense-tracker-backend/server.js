const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./expenses.db');

db.run(`CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  amount REAL,
  category TEXT,
  type TEXT,
  date TEXT
)`);

app.get('/api/transactions', (req, res) => {
  db.all('SELECT * FROM transactions ORDER BY date DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/transactions', (req, res) => {
  const { description, amount, category, type, date } = req.body;
  db.run(
    'INSERT INTO transactions (description, amount, category, type, date) VALUES (?, ?, ?, ?, ?)',
    [description, amount, category, type, date],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

app.delete('/api/transactions/:id', (req, res) => {
  db.run('DELETE FROM transactions WHERE id = ?', req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.listen(5000, () => console.log('API running on http://localhost:5000'));
