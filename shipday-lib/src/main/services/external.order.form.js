export function getMailSendingAjaxConfig(data) {
    const url = "/sendEmail";
    return {
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false
    };
}

export function getMailSendingWithoutSignatureAjaxConfig(data) {
    const url = "/sendEmailWithoutSignature";
    return {
        url: url,
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false
    };
}

export function getCompanyInfoAjaxConfig(identificationNo) {
    const url = "/getCompanyInfobyIdentificationNumber/" + identificationNo;
    return {
        url: url,
        type: 'GET',
        dataType: 'json'
    };
}
