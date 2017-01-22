module.exports = {

    'Google test case': (client) => {
        const google = client.page.googlePO();
       	// Test actions
	// google.xxxxx();
	client.perform(() => {console.log("this is a test")});
    }
};

