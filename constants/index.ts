export const GenderOptions = ["Male", "Female"];

export const PatientFormDefaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: new Date(Date.now()),
    gender: "Male" as Gender,
    address: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    primaryPhysician: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: "",
    currentMedication: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
    identificationType: "Birth Certificate",
    identificationNumber: "",
    identificationDocument: [],
    treatmentConsent: false,
    disclosureConsent: false,
    privacyConsent: false,
};

export const IdentificationTypes = [
    "Birth Certificate",
    "Driver's License",
    "Medical Insurance Card/Policy",
    "Military ID Card",
    "National Identity Card",
    "Passport",
    "Student ID Card",
];

export const Doctors = [
    {
        image: "/assets/images/dr-zulu.png",
        name: "Mazwi Zulu",
    },
    {
        image: "/assets/images/dr-cele.png",
        name: "Cindy Cele",
    },
    {
        image: "/assets/images/dr-mbhele.png",
        name: "David Mbhele",
    },
    {
        image: "/assets/images/dr-khuzwayo.png",
        name: "Simon Khuzwayo",
    },
    {
        image: "/assets/images/dr-mkhize.png",
        name: "Janet Mkhize",
    },
    {
        image: "/assets/images/dr-roberts.png",
        name: "Victor Roberts",
    },
    {
        image: "/assets/images/dr-evans.png",
        name: "Martha Evans",
    },
    {
        image: "/assets/images/dr-junda.png",
        name: "Nonjabulo Junda",
    },
    {
        image: "/assets/images/dr-mahlaba.png",
        name: "Njabulo Mahlaba",
    },
    {
        image: "/assets/images/dr-khoza.png",
        name: "Sibusiso Khoza",
    },
];

export const StatusIcon = {
    scheduled: "/assets/icons/check.svg",
    pending: "/assets/icons/pending.svg",
    cancelled: "/assets/icons/cancelled.svg",
};