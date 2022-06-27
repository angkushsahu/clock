if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/sw.js")
		.then(registration => {
			console.log("Service-Worker Registered");
			console.log(registration);
		})
		.catch(error => {
			console.error("Service-Worker Registration failed");
			console.error(error);
		});
} else {
	console.error("No service worker support for this browser, try a different browser");
}
