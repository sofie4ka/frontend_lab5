const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const group = document.getElementById('group').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const email = document.getElementById('email').value.trim();

  const fullNamePattern = /^[A-Z]{1}[a-z]{4,} [A-Z]{1}\.[A-Z].$/;
  const groupPattern = /^[A-Z]{2}-[0-9]{2}$/;
  const phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  const addressPattern = /^[A-Z]{1}[a-z]{2,}$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValidFullName = fullNamePattern.test(fullName);
  const isValidGroup = groupPattern.test(group);
  const isValidPhone = phonePattern.test(phone);
  const isValidAddress = addressPattern.test(address);
  const isValidEmail = emailPattern.test(email);

  if (isValidFullName && isValidGroup && isValidPhone && isValidAddress && isValidEmail) {
    const userInfo = {
      'Full Name': fullName,
      'Group': group,
      'Phone': phone,
      'Address': address,
      'Email': email
    };
    window.alert(JSON.stringify(userInfo, null, 2));
  } else {
    if (!isValidFullName) document.getElementById('fullName').classList.add('error');
    if (!isValidGroup) document.getElementById('group').classList.add('error');
    if (!isValidPhone) document.getElementById('phone').classList.add('error');
    if (!isValidAddress) document.getElementById('address').classList.add('error');
    if (!isValidEmail) document.getElementById('email').classList.add('error');
  }
});