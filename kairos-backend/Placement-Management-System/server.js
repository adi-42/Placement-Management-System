require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");   
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const funcs = require('./trainee_db.js');
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use(
	cookieSession({
		name: "session",
		keys: ["burhan"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use("/auth", authRoute);
app.post('/emp/new', (req, res)=>{
    funcs.new_emp(req.body);
    funcs.save_changes();
    res.send("Employee added with Access Level : " + req.body['Access Level']);
});
app.get('/display', (req, res) => { 
	let level=req.query.level;
    let data = funcs.display_all(level);
    res.json(data); 
});
app.post('/profile/edit', (req, res) => { 
    new_values = req.body;
    uuid = new_values['Unique ID Number'];
    funcs.update_user_profile(uuid, new_values);
    funcs.save_changes();
});
app.get('/profile', (req, res) => { 
    let trainee = funcs.display_one(req.query.uuid,req.query.level);
    res.send((trainee));
});
const port = process.env.PORT;
app.listen(port, () => console.log(`Listenting on port ${port}...`));