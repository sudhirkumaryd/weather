const express=require("express")
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=5000;

const staic_path=path.join(__dirname,"../public");
const main_path=path.join(__dirname,"../main/views");
const part_path=path.join(__dirname,"../main/part");
app.set('view engine','hbs');
app.set('views',main_path);
hbs.registerPartials(part_path);

app.use(express.static(staic_path));
app.get("/",(req,res)=>
{
    res.render("index");
})
app.get("/about",(req,res)=>
{
    res.render("about");
})
app.get("/weather",(req,res)=>
{
    res.render("weather");
})
app.get("*",(req,res)=>
{
    res.send("error404");
})
app.listen(port,()=>
{
    console.log(`sab kuch thik chal raha hai on port number ${port}`)
})