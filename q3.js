function validateForm() {
    var FirstName = document.getElementById('firstName').value;
    var LastName = document.getElementById('lastName').value;
    var PhoneNumber = document.getElementById('phoneNumber').value;
    var Email = document.getElementById('email').value;
    var Terms = document.getElementById('termsAgreement').checked;
    var Policy = document.getElementById('privacyPolicy').checked;
    var Education = document.getElementById('educationLevel').value;

    if (FirstName === '' || PhoneNumber === '' || Email === '' || LastName === '' || Policy === false || Terms === false || Education === '') {
        alert('Please fill out all required fields.');
        return false;
    }
    
    // Validation for email format
    var emailInput = document.getElementById('email');
    var emailValidation = /@gmail\.com$/i;
    if (!emailValidation.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validation for phone number
    var phoneInput = document.getElementById('phoneNumber');
    var phoneValidation = /^\d{11}$/;
    if (!phoneValidation.test(phoneInput.value)) {
        alert('Please enter a valid 11-digit phone number');
        return false;
    }

    console.log('First Name:', FirstName);
    console.log('Last Name:', LastName);
    console.log('Phone Number:', PhoneNumber);
    console.log('Email:', Email);
    console.log('Education:', Education);
    console.log('Policy:', Policy);
    console.log('Terms:', Terms);

    return true;
}


function viewApplications() {

    const applications = [{
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value
    }
];

    const tableBody = document.getElementById('applicationsTableBody');

    tableBody.innerHTML = '';
    applications.forEach(application => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${application.firstName}</td>
            <td>${application.lastName}</td>
            <td>${application.email}</td>
            <!-- Add more table cells for additional data -->
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('applicationTable').classList.remove('hidden');
}

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
    
        console.log('Form submitted successfully');
        document.getElementById('jobApplicationForm').classList.add('hidden');
        document.getElementById('h2tag').classList.add('hidden');
        document.getElementById('con').classList.add('hidden');
        document.getElementById('viewApplicationsBtn').classList.remove('hidden');
    }
});
