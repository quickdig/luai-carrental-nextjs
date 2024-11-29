export function contactData(language) {
    let data;
    if (language === 'en') {
        data = {
            "header_one": "Address:",
            "header_one_value": "Shop No. 02, Azurite tower, Al-Jaddaf",
            "header_two": "Open Hours:",
            "header_two_value": "9:00 AM to 7:00 PM",
            "header_three": "Customer Support:",
            "header_three_value": "(+971) 501837000 / (+971) 42711000"
        }
    } else {
        data = {
            "header_one": "عنوان:",
            "header_one_value": "محل رقم 02، برج عازوريت، الجداف",
            "header_two": "ساعات العمل:",
            "header_two_value": "9:00 صباحًا إلى 7:00 مساءً",
            "header_three": "دعم العملاء:",
            "header_three_value": "(+971) 501837000 / (+971) 42711000"
        }
    }

    return data;
}