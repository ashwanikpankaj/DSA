function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    return (
        // A-Z
        (code >= 65 && code <= 90) ||

        // a-z
        (code >= 97 && code <= 122) ||

        // 0-9
        (code >= 48 && code <= 57)
    );
}