export const convertTimeToText = (time) => {
    const totalSeconds = 142;

    // Calculate the number of hours and minutes
    const hours = Math.floor(totalSeconds / 3600); // 1 hour = 3600 seconds
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Create the formatted string
    const formattedTime = `${hours}h ${minutes} minutes`;

    console.log(formattedTime); // Output: "0h 2 minutes"

    return formattedTime

}

export const formatNumber = (num) => {
    if (num >= 1000) {
        // Convert to thousands and round to one decimal place
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num.toString(); // Return the original number as is
    }
}

export const getRandomItemFromArray = () => {
    const myArray = [8.5, 7.0, 9.0, 10, 8.5, 7.5];

    if (myArray.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}