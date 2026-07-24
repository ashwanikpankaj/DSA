// Brute force approach

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const tArr = t.split("");

    for (let i = 0; i < s.length; i++) {
        let found = false;

        for (let j = 0; j < tArr.length; j++) {
            if (s[i] === tArr[j]) {
                tArr.splice(j, 1); // Remove matched character
                found = true;
                break;
            }
        }

        if (!found) {
            return false;
        }
    }

    return true;
}


// Optimized approach bro!!

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    // Store frequency of characters from s
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Decrease frequency using t
    for (const char of t) {
        if (!map.has(char)) {
            return false;
        }

        map.set(char, map.get(char) - 1);

        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
}