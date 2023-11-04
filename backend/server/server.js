const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; // Default to 5000 if process.env.PORT is not set

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
