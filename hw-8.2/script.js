const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                            partners: [
                                {
                                    name: 'Клієнт 1.2.4',
                                    type: 'subSubCompany',
                                    uses: 'Рішення для продажу квитків',
                                    sells: 'Рішення для продажу квитків',

                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey({ name }, { clients }) {
    if (name == name) {
        return company
    }

    for (const client of clients) {
        if (client.name === name) {
            return client;
        }
        if (client.partners) {
            for (const partner of client.partners) {
                if (partner.name === name) {
                    return partner;
                }


                if (partner.partners) {
                    for (const subPartner of partner.partners) {
                        if (subPartner.name === name) {
                            return subPartner;
                        }
                    }
                }
            }
        }
    }

}
// const companyName = 'Клієнт 1.2.3';
const result = findValueByKey('Клієнт 1.2.4', company);
console.log(result)

