const sum=(num1,num2)=>num1+num2;
const Pi=3.14;
class Math
{
    constructor()
    {
        console.log('object created in ctor');
    }
}
module.exports.sum=sum;
module.exports.Pi=Pi;
module.exports.Math=Math;