const router = require('express').Router();

//Get authors
router.get('/autores', (req, res) => {
    res.send({ autor1: "JDSV", autor2: "AACA" })
});

//Post de sumas
router.post('/suma', (req, res) => {
    const { nums } = req.body;
    console.log(nums);
    let resultado = 0;
    for (i = 0; i < nums.length; i++)
        resultado = resultado + nums[i];
    console.log(resultado);
    res.send({ respuesta: resultado });
});

//Post de resta
router.post('/resta', (req, res) => {
    const { nums, numsToSub } = req.body;
    console.log(nums, numsToSub);
    let resultado = 0, resFinal = 0;
    for (i = 0; i < nums.length; i++)
        resultado = resultado + nums[i];
    resFinal = numsToSub - resultado;
    console.log(resFinal);
    res.send({ respuesta: resFinal });
});

//Post de multiplicar
router.post('/multiplicar', (req, res) => {
    const { nums } = req.body;
    console.log(nums);
    let resultado = 1;
    for (i = 0; i < nums.length; i++)
        resultado = resultado * nums[i];
    console.log(resultado);
    res.send({ respuesta: resultado });
});

//Post de dividir
router.post('/dividir', (req, res) => {
    const { nums, numToDiv } = req.body;
    console.log(nums, numToDiv);
    let resultado = numToDiv / nums[0];
    for (i = 1; i < nums.length; i++) {
        resultado = resultado / nums[i];
    }
    console.log();
    res.send({ respuesta: resultado });
});

//Post Free
router.post('/free', (req, res) => {
    const { operations } = req.body;
    console.log(operations);
    var newString = operations.split(" ");
    console.log(newString);
    resultado = eval(newString.join(" "));
    console.log(resultado);
    res.send({ respuesta: resultado });
});

module.exports = router;