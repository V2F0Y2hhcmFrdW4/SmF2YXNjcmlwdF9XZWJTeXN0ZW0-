function calculateVAT() {
    let price = parseFloat(document.getElementById('price').value);
    let vatRate = 7;
    let vatAmount = price * (vatRate / 100);
    let totalPrice = price + vatAmount;
    document.getElementById('vat').textContent = vatAmount.toFixed(2);
    document.getElementById('total').textContent = totalPrice.toFixed(2);
}
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    if (!weight || !height || height <= 0) {
        alert("กรุณากรอกข้อมูลให้ถูกต้อง");
        return;
    }
    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi").innerText = bmi;
    let result = "";
    if (bmi < 18.5) result = "น้ำหนักต่ำกว่ามาตรฐาน";
    else if (bmi < 24.9) result = "น้ำหนักปกติ";
    else if (bmi < 29.9) result = "น้ำหนักเกิน";
    else result = "โรคอ้วน";
    document.getElementById("result").innerText = result;
}