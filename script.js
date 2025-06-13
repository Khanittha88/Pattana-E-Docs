// 👉 เปลี่ยนเป็น Script URL ของคุณเอง!
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCJv9NEqn6VSFAWl4owedtEBP9UCVzM4aak9H-QJyvOpSE5iAl3_kqvH9wMnHRsKo/exec";

// บันทึกหนังสือรับ
function saveDocument() {
  const data = {
    "วันที่รับหนังสือ – เวลา": document.getElementById('dateTime').value,
    "เลขสารบรรณกลาง": document.getElementById('centralDocNo').value,
    "เลขสารบรรณกลุ่มพัฒนาการศึกษา": document.getElementById('groupDocNo').value,
    "ชั้นความเร็ว": document.getElementById('urgency').value,
    "ชั้นความลับ": document.getElementById('confidential').value,
    "ที่หนังสือ": document.getElementById('docFrom').value,
    "ลงวันที่": document.getElementById('docDate').value,
    "จากหน่วยงาน": document.getElementById('fromDept').value,
    "เรียน": document.getElementById('toPerson').value,
    "เรื่อง": document.getElementById('subject').value,
    "เจ้าหน้าที่": document.getElementById('staff').value,
    "หมายเหตุ": document.getElementById('remark').value
  };

  const url = `${SCRIPT_URL}?action=saveDocument&data=${encodeURIComponent(JSON.stringify(data))}&callback=handleResponse`;

  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// บันทึกเจ้าหน้าที่
function saveStaff() {
  const data = {
    "ชื่อ–นามสกุล": document.getElementById('staffName').value,
    "ตำแหน่ง": document.getElementById('staffPosition').value
  };

  const url = `${SCRIPT_URL}?action=saveStaff&data=${encodeURIComponent(JSON.stringify(data))}&callback=handleResponse`;

  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// Callback JSONP
function handleResponse(response) {
  if (response.status === 'success') {
    Swal.fire('สำเร็จ!', response.message, 'success');
  } else {
    Swal.fire('ผิดพลาด!', response.message, 'error');
  }
}
