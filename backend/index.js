import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv  from "dotenv";
import postRoutes from './routes/posts.js'

dotenv.config()

const app = express();
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// const CONNECTION_URL= 'mongodb+srv://enenchejustina:Pretytina123@cluster1.ytrabib.mongodb.net/?retryWrites=true&w=majority'
// const PORT = process.env.PORT || 5000;

// mongoose
// .connect(CONNECTION_URL, { useNEWUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(PORT, () => {
//              console.log(`Server running on port: ${PORT}`)
//             })
//     .catch((error) => console.log(error.message));

//         })



// Connect to Db and Start Server
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Running on ${PORT}`)
        })

    })
    .catch((err) => console.log(err));
    
