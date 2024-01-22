const calculateBill = () => {

    const item = document.getElementById('item').value

    const quantity = document.getElementById('quantity').value

    const fee = document.getElementById('fee').value

    console.log(`${item} costs ${quantity*fee}`)
}