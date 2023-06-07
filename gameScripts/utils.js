export default class Utils {
    static getRandomInt(max) { // when given max=5, it returnes one of the following: 1, 2, 3, 4, 5
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    static replaceUrl(oldUrl, newUrl) {
        // Get the current URL
        var currentUrl = window.location.href;

        // Replace the old URL with the new URL
        var newUrl = currentUrl.replace(oldUrl, newUrl);

        // Navigate to the new URL
        window.location.href = newUrl;
    }
}