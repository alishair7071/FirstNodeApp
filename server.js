const express= require('express');
const app= express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express test server is running!");
});


const PORT= 8000;
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at ${PORT}`);
});