const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 9876;

const WINDOW_SIZE = 10;
let storedNumbers = [];

const calculateAverage = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return nums.length > 0 ? sum / nums.length : 0;
};

app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;

  try {
    const response = await axios.get(`http://third-party-server/${numberid}`);
    const fetchedNumbers = response.data.numbers || [];

    storedNumbers = Array.from(new Set([...storedNumbers, ...fetchedNumbers]));

    if (storedNumbers.length > WINDOW_SIZE) {
      storedNumbers = storedNumbers.slice(-WINDOW_SIZE);
    }

    const avg = calculateAverage(storedNumbers);

    const responseJSON = {
      windowPrevState: storedNumbers.slice(0, -fetchedNumbers.length),
      windowCurrState: storedNumbers,
      numbers: fetchedNumbers,
      avg: avg
    };

    res.json(responseJSON);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
