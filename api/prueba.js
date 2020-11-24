module.exports = (req,res) =>{

    const{a='0'} = req.query
    const{b='0'} = req.query
    suma = partseInt(a) + partseInt(b)
    res.status(200).send("Suma = " + String(suma))

}
