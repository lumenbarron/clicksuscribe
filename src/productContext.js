import React, {useState, createContext} from 'react';

export const ProductContext = createContext();

//Provide the information
export const ProductProvider = (props) => {
    const [allProducts, setAllProducts] = useState([
        // products
        {
            name : "Office 365 Business Premium",
            description : "Suscripcion",
            fabricator : "Microsoft",
            id: "031c9-e47.",
            price : "10.53",
            img : "https://i.postimg.cc/Ls5mR0LQ/365.png"
        },
        {
            name : "Azure Active Directory Basic  Government Pricing",
            description : "A robust set of capabilities to empower organizations with more demanding needs on identity and access management.",
            fabricator : "Microsoft",
            id: "0a798-3cd.",
            price : "0.89",
            img : "https://i.postimg.cc/brcPxyM4/Azure.png"
        },
        {
            name : "Exchange Online Protection  Government Pricing",
            description : "Advanced anti-malware and anti-spam protection for email deployments.",
            fabricator : "Microsoft",
            id: "0cca4-4d6.",
            price : "0.89",
            img : "https://i.postimg.cc/v8fbQnxy/Default.png"
        },
        {
            name : "Project Pro for Office 365 (Government Pricing)",
            description : "Sin descripción",
            fabricator : "Microsoft",
            id: "11e3c-9a9.",
            price : "22.22",
            img : "https://i.postimg.cc/Ls5mR0LQ/365.png"
        },
        {
            name : "Skype for Business Online  Plan 2",
            description : "Unified communications plan with advanced capabilities including enterprise Instant Messaging, Presence and online meetings with audio and video conferencing and multiparty data sharing.",
            fabricator : "Microsoft",
            id: "14c61-739.",
            price : "4.63",
            img : "https://i.postimg.cc/v8fbQnxy/Default.png"
        },
        {
            name : "Autodesk AutoCAD Commercial Single-user Annual Subscription Renewal Recurring with Basic Support",
            description : "Autodesk AutoCAD Commercial Single-user Annual Subscription Renewal Recurring with Basic Support.",
            fabricator : "Autodesk",
            id: "001I1-004640-T585",
            price : "1175",
            img : "https://i.postimg.cc/sxYrwFCx/Autocad.jpg"
        },
        {
            name : "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with",
            description : "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with Advanced Support.",
            fabricator : "Autodesk",
            id: "001I1-003126-T227",
            price : "1225",
            img : "https://i.postimg.cc/sxYrwFCx/Autocad.jpg"
        },
        {
            name : "AutoCAD Commercial Single-user Monthly Subscription Renewal Recurring",
            description : "Autodesk AutoCAD Commercial Single-user Monthly Subscription Renewal Recurring with Advanced Support.",
            fabricator : "Autodesk",
            id: "001I1-001563-T142",
            price : "160",
            img : "https://i.postimg.cc/sxYrwFCx/Autocad.jpg"
        },
        {
            name : "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with",
            description : "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with Advanced Support SPZD",
            fabricator : "Autodesk",
            id: "001I1-006876-T671",
            price : "1225",
            img : "https://i.postimg.cc/sxYrwFCx/Autocad.jpg"
        },
        {
            name : "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Monthly Auto-Renew Subscription wit",
            description : "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Monthly Auto-Renew Subscription with Advanced Support",
            fabricator : "Autodesk",
            id: "001I1-006286-T605",
            price : "155",
            img : "https://i.postimg.cc/sxYrwFCx/Autocad.jpg"
        },
        {
            name : "VCPP 1800 Monthly Rental overage charges",
            description : "Sin descripción",
            fabricator : "VMWARE",
            id: "VSPP-1800-1-RENT-S",
            price : "0.9",
            img : "https://i.postimg.cc/DzNnzdcv/Vmware.jpg"
        },
        {
            name : "VCPP 3600 Monthly Rental overage charges",
            description : "Sin descripción",
            fabricator : "VMWARE",
            id: "VSPP-3600-1-RENT-S",
            price : "0.78",
            img : "https://i.postimg.cc/DzNnzdcv/Vmware.jpg"
        },
        {
            name : "VCPP 10800 Monthly Rental overage charges",
            description : "Sin descripción",
            fabricator : "VMWARE",
            id: "VSPP-10800-1-RENT-S",
            price : "0.72",
            img : "https://i.postimg.cc/DzNnzdcv/Vmware.jpg"
        },
        {
            name : "VCPP 18000 Monthly Rental overage charges",
            description : "Sin descripción",
            fabricator : "VMWARE",
            id: "VSPP-18000-1-RENT-S",
            price : "0.66",
            img : "https://i.postimg.cc/DzNnzdcv/Vmware.jpg"
        },
        {
            name : "VCPP 30000 Monthly Rental overage charges",
            description : "Sin descripción",
            fabricator : "VMWARE",
            id: "VSPP-30000-1-RENT-S",
            price : "0.6",
            img : "https://i.postimg.cc/DzNnzdcv/Vmware.jpg"
        },
    ]);
    return (
        <ProductContext.Provider value={[allProducts, setAllProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
