export function contactData(language) {
    let data;
    if (language === 'en') {
        data = {
            "header_one": "Address:",
            "header_one_value": "No. 51, 5th Street, Umm Ramool, Dubai",
            "header_two": "Open Hours:",
            "header_two_value": "9:00 AM to 7:00 PM",
            "header_three": "Customer Support:",
            "header_three_value": "(+971) 508 879 971"
        }
    } else {
        data = {
            "header_one": "عنوان:",
            "header_one_value": "رقم 51، الشارع الخامس، أم رمول، دبي",
            "header_two": "ساعات العمل:",
            "header_two_value": "9:00 صباحًا إلى 7:00 مساءً",
            "header_three": "دعم العملاء:",
            "header_three_value": "(+971) 508 879 971"
        }
    }

    return data;
}