                                                                                                                                    
    const regex = /^[^Aa]{6,}$/;

    // Очікуємо true:
    console.log("Wonderful:", regex.test("Wonderful"));
    console.log("Joyful:", regex.test("Joyful"));
    
    // Очікуємо false:
    console.log("Happiness:", regex.test("Happiness"));
    console.log("Time:", regex.test("Time"));                                                                                                                      
    console.log("Task:", regex.test("Task"));                                                                                                              
    console.log("Apple:", regex.test("Apple"));
