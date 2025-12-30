function chunkString(str, chunkLength) {
    // Acceptance Criteria: If input string is null, return empty array
    if (str === null) {
        return [];
    }

    const chunks = [];
    
    // Iterate through the string, jumping by the chunkLength each time
    for (let i = 0; i < str.length; i += chunkLength) {
        // slice(start, end) extracts characters from start up to (but not including) end
        chunks.push(str.slice(i, i + chunkLength));
    }

    return chunks;
}