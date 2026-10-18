                                                                                                                                    
//ДЗ 10.2
    const regex = /^[^Aa]{6,}$/;

    // Очікуємо true:
    console.log("Wonderful:", regex.test("Wonderful"));
    console.log("Joyful:", regex.test("Joyful"));
    
    // Очікуємо false:
    console.log("Happiness:", regex.test("Happiness"));
    console.log("Time:", regex.test("Time"));                                                                                                                      
    console.log("Task:", regex.test("Task"));                                                                                                              
    console.log("Apple:", regex.test("Apple"));

//ДЗ 10.1
let arr = [
        {
            userName: "Test",
            lastName: "Test",
            email: "test.test@gmail.com"
        },
        {
            userName: "Dmitro",
            lastName: "Porohov",
            email: "dmitro.porohov@yahoo.com"
        },
        {
            userName: "Andrii",
            lastName: "",
            email: "andrii@mail.ru"
        },
    ];

    let emailRegex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

    let trustedEmails = [];

    for (let i = 0; i < arr.length; i++) {
        if (emailRegex.test(arr[i].email)) {
            trustedEmails.push(arr[i].email);
        }
    }

    console.log(trustedEmails);