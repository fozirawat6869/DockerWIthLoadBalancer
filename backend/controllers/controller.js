

export const home=(req,res)=>{
    console.log(process.env.SERVER_ID)
    
    res.status(200).json({
       success:true,
       message:"hlo details mayur",
       server:process.env.SERVER_ID,
       port:process.env.port
    })
// to show something in the browser

}